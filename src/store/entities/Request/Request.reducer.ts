import * as TYPES from './Request.types';
import moment from "moment";

export type SortTypes = 'best' | 'price' | 'duration' | 'stops';

export const SortType = {
    BEST: 'best',
    PRICE: 'price',
    DURATION: 'duration',
    STOPS: 'stops'
}

export interface RequestInterface {
    origin: string | undefined,
    destination: string | undefined,
    leaveDate: string | undefined,
    returnDate: string | undefined,
    numberOfAdults: number,
    numberOfChildren: number,
    page: number | undefined,
    sortBy?: SortTypes,
    filter?: string
}

const initState: RequestInterface = {
    origin: undefined,
    destination: undefined,
    leaveDate: moment(new Date()).format('YYYY-MM-DD'),
    returnDate: moment(new Date()).add(1, 'day').format('YYYY-MM-DD'),
    numberOfAdults: 1,
    numberOfChildren: 0,
    page: 1,
    sortBy: 'price',
    filter: '{"filterStops": [1]}'
}

const reducer = (state = initState, action: any) => {
    switch (action.type) {
        case TYPES.ADD_REQUEST_PARAM:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default reducer;