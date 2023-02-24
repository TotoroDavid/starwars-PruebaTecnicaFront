import React from 'react';
import { useParams } from 'react-router-dom';
import { useStarWarsPeople } from '../hooks/useStarWarsPeople';

export const PersonajesById = () => {
    const { id } = useParams();
    const { people } = useStarWarsPeople();
    const selectedPerson = people.find(person => person.name === id);

    return (
        <div className='container d-flex justify-content-center align-items-center text-center'>
            <div className='row containerInfo__inicio'>
                <p>{selectedPerson?.name}</p>
                <div className='col-6'>
                    <h2>Altura: {selectedPerson?.height}</h2>
                    <h2>Masa: {selectedPerson?.mass}</h2>
                    <h2>Color de pelo: {selectedPerson?.hair_color}</h2>
                    <h2>Color de piel: {selectedPerson?.skin_color}</h2>
                </div>
                <div className='col-6'>
                    {selectedPerson && (
                        <div className='container'>
                            <h2>{selectedPerson.name}</h2>
                            <h4>Altura: {selectedPerson.height}</h4>
                            <h4>Masa: {selectedPerson.mass}</h4>
                            <h4>Color de pelo: {selectedPerson.hair_color}</h4>
                            <h4>Color de piel: {selectedPerson.skin_color}</h4>
                            <h4>Año de nacimiento: {selectedPerson.birth_year}</h4>
                            <h4>Género: {selectedPerson.gender}</h4>
                        </div>
                    )}
                    {!selectedPerson && <h2>Cargando especificaciones del personaje...</h2>}
                </div>
            </div>
        </div>
    );
};
