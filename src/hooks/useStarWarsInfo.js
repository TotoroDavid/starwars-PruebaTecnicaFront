import { useEffect, useState } from 'react';
import axios from 'axios';

export const useStarWarsInfo = (selectedSpecie) => {
    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const fetchFilms = async () => {
            const filmData = await Promise.all(selectedSpecie.films.map(film => axios.get(film)));
            setFilms(filmData.map(data => data.data.title));
        };

        const fetchPeople = async () => {
            const peopleData = await Promise.all(selectedSpecie.people.map(person => axios.get(person)));
            setPeople(peopleData.map(data => data.data.name));
        };

        if (selectedSpecie) {
            fetchFilms();
            fetchPeople();
        }
    }, [selectedSpecie]);

    return {
        films,
        people
    };
};
