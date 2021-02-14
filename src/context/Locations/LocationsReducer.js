import { GET_LOCATIONS, SET_LOADING } from "../types";

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case GET_LOCATIONS:
            return {
                ...state,
                locations: payload,
            };

        case SET_LOADING:
            return {
                ...state,
                isLoading: payload
            }
        default:
            return state;
    }
};