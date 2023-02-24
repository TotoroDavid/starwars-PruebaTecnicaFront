import { useState, useEffect } from 'react';
import axios from 'axios';

export const useStarWarsPlanets = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/')
            .then(response => {
                setPlanets(response.data.results)
                // console.log(response.data.results)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return { planets };
}
