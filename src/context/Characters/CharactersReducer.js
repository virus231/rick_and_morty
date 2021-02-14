import { GET_CHARACTERS, SET_LOADING } from "../types";

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case GET_CHARACTERS:
            return {
                ...state,
                characters: payload,
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