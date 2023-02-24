import { useState, useEffect } from 'react';
import axios from 'axios';

export const useStarWarsSpecies = () => {
    const [species, setSpecies] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/species/')
            .then(response => {
                setSpecies(response.data.results);
                // console.log(response.data.results);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return { species };
};
