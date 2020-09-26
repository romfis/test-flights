import {AppState} from "../../store";

export const getCurrentPage = (state: AppState) => {
    return state.requestOptions.page
}

export const getAdultNumber = (state: AppState) => {
    return state.requestOptions.numberOfAdults
}

export const getChildrenNumber = (state: AppState) => {
    return state.requestOptions.numberOfChildren
}

export const getParsedFilterValue = (state: AppState) => {
    let filter = 1;
    if (state.requestOptions.filter != null) {
        const parsed = JSON.parse(state.requestOptions.filter);
        filter = parsed.filterStops[parsed.filterStops.length - 1]
    }

    return filter;
}
