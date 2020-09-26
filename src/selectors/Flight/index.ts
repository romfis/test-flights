import { AppState } from "../../store"

export const getFlightEntity = (state: AppState) => {
    return state.flight;
}

export const getTotalPage = (state: AppState) => {
    return state.flight.totalPages;
}

export const getFlights = (state: AppState) => {
    return state.flight.flights;
}

export const getLoadingStatus = (state: AppState) => {
    return state.flight.loading;
}

export const getCurrentFlight = (state: AppState) => {
    return state.flight.currentFlight;
}


