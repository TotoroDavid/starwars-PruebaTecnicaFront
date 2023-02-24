import { useState, useEffect } from 'react';
import axios from 'axios';

export const useStarWarsPeople = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/')
            .then(response => {
                setPeople(response.data.results)
                // console.log(response.data.results)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return { people };
}
