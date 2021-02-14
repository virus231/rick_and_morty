import React, { useReducer } from "react";
import axios from "axios";
import EpisodesContext from "./EpisodesContext";
import EpisodesReducer from "./EpisodesReducer";

import { GET_EPISODES, FILTER_BY_NAME, SET_LOADING } from "../types";

const EpisodesState = ({children}) => {
    let initialState = {
        episodes: [],
        isLoading: false,
        activeNews: null,
    };

    const [state, dispatch] = useReducer(EpisodesReducer, initialState);

    const getEpisodes = async () => {
        try {
            dispatch({ type: SET_LOADING, payload: true });

            let res = await axios.get("https://rickandmortyapi.com/api/episode");
            let { data } = res;

            dispatch({ type: GET_EPISODES, payload: data.results.slice(0,25) });
        } catch (error) {
            console.error(error);
        }
    };

    const filterByName = async (value) => {
        try {
            dispatch({ type: SET_LOADING, payload: true });

            let res = await axios.get(`https://rickandmortyapi.com/api/episode/?name=${value}`);
            let { data } = res;

            dispatch({ type: GET_EPISODES, payload: data.results });

        } catch (e) {
            console.log(e)
        }
    }

    // const getDescription = async (id) => {
    //     try {
    //         let res = await axios.get(`https://node-hnapi.herokuapp.com/item/${id}`);
    //         let { data } = res;
    //
    //         // dispatch({ type: GET_DESCRIPTION, payload: data });
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    return (
        <EpisodesContext.Provider
            value={{
                episodes: state.episodes,
                getEpisodes,
                filterByName,
                isLoading: state.isLoading
            }}
        >
            {children}
        </EpisodesContext.Provider>
    );
};

export default EpisodesState;