import { useState, useEffect } from 'react';
import axios from 'axios';

export const useStarWarsFilms = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/films/')
            .then(response => {
                setFilms(response.data.results)
                // console.log(response.data.results)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return { films };
}
