import { useState, useEffect } from 'react';
import axios from 'axios';

export const useStarWarsShips = () => {
    const [ships, setShips] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/')
            .then(response => {
                setShips(response.data.results)
                // console.log(response.data.results)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return { ships };
}
