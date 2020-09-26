import * as TYPES from './Flight.types';
import { success, abort, error } from '@redux-requests/core'

export interface FlightInteface {
    leaving: string,
    arriving: string,
    duration: number,
    originAirportCode: string,
    destinationAirportCode: string,
    destinationAirportFullName: string,
    originAirportFullName: string,
    arriveDateTime: string,
    departDateTime: string,
    flightNumber: string,
    carrierImage: string,
    OperatingAirlineCompanyName: string
}

export interface ResultRowInteface {
    carrier: string,
    destination: string,
    origin: string,
    originCity: string | null,
    destinationCity: string | null,
    startDateTime: string,
    endDateTime: string,
    flightKey: string,
    inFlight: FlightInteface,
    outFlight: FlightInteface,
    price: number,
    isRoundTrip: boolean,
    isRefundable: boolean
}

export interface FlightStateInterface {
    loading: boolean,
    flights: Array<ResultRowInteface> | null,
    lastSelectedFlightKey: string | null,
    totalPages: number,
    totalFlights: number | null,
    currentFlight: ResultRowInteface | null
}

const initialState: FlightStateInterface = {
    loading: false,
    lastSelectedFlightKey: null,
    flights: [],
    totalPages: 1,
    totalFlights: null,
    currentFlight: null
}

const reducer = (state = initialState, action: any = {}) => {
    switch (action.type) {
        case TYPES.GET_FLIGHTS:
            return {
                ...state,
                loading: true
            }
        case TYPES.CHOSE_FLIGHT:
            return {
                ...state,
                currentFlight: { ...action.payload }
            }
        case success(TYPES.GET_FLIGHTS):
            if(!action.response.data) return state;
            return {
                ...state,
                loading: false,
                flights: [...action.response.data.flights],
                totalPages: action.response.data.totalPages,
                totalFlights: action.response.data.totalFlights,
                lastSelectedFlightKey: action.response.data.lastSelectedFlightKey
            }
        case abort(TYPES.GET_FLIGHTS):
        case error(TYPES.GET_FLIGHTS):
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default reducer;