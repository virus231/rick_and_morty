import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CharactersState from "./context/Characters/CharactersState";
import LocationsState from "./context/Locations/LocationsState";
import EpisodesState from "./context/Episodes/EpisodesState";


ReactDOM.render(
    <EpisodesState>
        <LocationsState>
            <CharactersState>
                <App />
            </CharactersState>
        </LocationsState>
    </EpisodesState>,
  document.getElementById('root')
);

