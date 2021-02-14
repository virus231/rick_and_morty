import { GET_EPISODES, FILTER_BY_NAME, SET_LOADING } from "../types";

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case GET_EPISODES:
            return {
                ...state,
                episodes: payload,
            };

        // case FILTER_BY_NAME:
        //     return {
        //         ...state,
        //         episodes: state.episodes.map(episode => episode.name === payload)
        //     }

        case SET_LOADING:
            return {
                ...state,
                isLoading: payload
            }
        default:
            return state;
    }
};