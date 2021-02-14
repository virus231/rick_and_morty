import React, { useReducer } from "react";
import axios from "axios";
import LocationsContext from "./LocationsContext";
import LocationsReducer from "./LocationsReducer";

import {GET_CHARACTERS, GET_LOCATIONS, SET_LOADING} from "../types";

const LocationsState = ({children}) => {
    let initialState = {
        locations: [],
        isLoading: false,
        activeNews: null,
    };

    const [state, dispatch] = useReducer(LocationsReducer, initialState);

    const getLocations = async () => {
        try {
            dispatch({ type: SET_LOADING, payload: true });

            let res = await axios.get("https://rickandmortyapi.com/api/location");
            let { data } = res;

            dispatch({ type: GET_LOCATIONS, payload: data.results.slice(0,25) });
        } catch (error) {
            console.error(error);
        }
    };

    const filterByName = async (value) => {
        try {
            dispatch({ type: SET_LOADING, payload: true });

            let res = await fetch(`https://rickandmortyapi.com/api/location/?name=${value}`);
            let data = await res.json()

            dispatch({ type: GET_LOCATIONS, payload: data.results.slice(0,10) });
        } catch (error) {
            console.error(error);
        }
    }

    const filterByType = async (value) => {
        try {
            dispatch({ type: SET_LOADING, payload: true });

            let res = await fetch(`https://rickandmortyapi.com/api/location/?type=${value}`);
            let data = await res.json()

            dispatch({ type: GET_LOCATIONS, payload: data.results.slice(0,10) });
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <LocationsContext.Provider
            value={{
                locations: state.locations,
                getLocations,
                filterByName,
                filterByType,
                isLoading: state.isLoading
            }}
        >
            {children}
        </LocationsContext.Provider>
    );
};

export default LocationsState;