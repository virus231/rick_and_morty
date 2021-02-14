import React, { useReducer } from "react";
import axios from "axios";
import CharactersContext from "./CharactersContext";
import CharactersReducer from "./CharactersReducer";

import { GET_CHARACTERS, SET_LOADING } from "../types";

const CharactersState = ({children}) => {
    let initialState = {
        characters: [],
        isLoading: false,
        activeNews: null,
    };

    const [state, dispatch] = useReducer(CharactersReducer, initialState);

    const getCharacters = async () => {
        try {
            dispatch({ type: SET_LOADING, payload: true });

            let res = await fetch("https://rickandmortyapi.com/api/character");
            let data = await res.json()
            console.log(data)

            dispatch({ type: GET_CHARACTERS, payload: data.results.slice(0,10) });
        } catch (error) {
            console.error(error);
        }
    };

    const filterByName = async (value) => {
        try {
            dispatch({ type: SET_LOADING, payload: true });

            let res = await fetch(`https://rickandmortyapi.com/api/character/?name=${value}`);
            let data = await res.json()

            dispatch({ type: GET_CHARACTERS, payload: data.results.slice(0,10) });
        } catch (error) {
            console.error(error);
        }
    }
    
    const filterByGender = async (value) => {
        try {
            dispatch({ type: SET_LOADING, payload: true });

            let res = await fetch(`https://rickandmortyapi.com/api/character/?gender=${value}`);
            let data = await res.json()

            dispatch({ type: GET_CHARACTERS, payload: data.results.slice(0,10) });
        } catch (e) {

        }
    }

    const filterByStatus = async (value) => {
        try {
            dispatch({ type: SET_LOADING, payload: true });

            let res = await fetch(`https://rickandmortyapi.com/api/character/?status=${value}`);
            let data = await res.json()

            dispatch({ type: GET_CHARACTERS, payload: data.results.slice(0,10) });

        } catch(e) {
            console.log(e)
        }
    }

    const handleNextPage = async (value) => {
        dispatch({ type: SET_LOADING, payload: true });

        let res = await fetch(`https://rickandmortyapi.com/api/character?page=${value}`);
        let data = await res.json()
        console.log(data)

        dispatch({ type: GET_CHARACTERS, payload: data.results.slice(0,10) });
        console.log(data)
    }

    const handlePrevPage = async (value) => {
        dispatch({ type: SET_LOADING, payload: true });

        let res = await fetch(`https://rickandmortyapi.com/api/character?page=${value}`);
        let data = await res.json()
        console.log(data)

        dispatch({ type: GET_CHARACTERS, payload: data.results.slice(0,10) });
        console.log(data)
    }


    return (
        <CharactersContext.Provider
            value={{
                characters: state.characters,
                getCharacters,
                filterByName,
                filterByGender,
                filterByStatus,
                handleNextPage,
                handlePrevPage,
                isLoading: state.isLoading
            }}
        >
            {children}
        </CharactersContext.Provider>
    );
};

export default CharactersState;