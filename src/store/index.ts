import { createStore, combineReducers, applyMiddleware } from 'redux'
import axios from 'axios';
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk';
import { handleRequests } from '@redux-requests/core';
import { createDriver } from '@redux-requests/axios';
import logger from 'redux-logger';
import { FlightEntity, RequestEntity } from "./entities";
import { FlightStateInterface } from "./entities/Flight/Flight.reducer";
import { RequestInterface } from './entities/Request/Request.reducer';

export interface AppState {
    requests: object,
    flight: FlightStateInterface,
    requestOptions: RequestInterface
}

const axiosInstance = axios.create({
    baseURL: 'http://business-issue1608.test.travelwits.com',
});

const configureStore = () => {

    const { requestsReducer, requestsMiddleware } = handleRequests({
        driver: createDriver(axiosInstance),
    });

    const reducers = combineReducers({
        requests: requestsReducer,
        flight: FlightEntity.reducer,
        requestOptions: RequestEntity.reducer
    });

    const store = createStore(
        reducers,
        applyMiddleware(thunk, ...requestsMiddleware, logger),
    );

    return store;
};

export const history = createBrowserHistory()
export const store = configureStore();
