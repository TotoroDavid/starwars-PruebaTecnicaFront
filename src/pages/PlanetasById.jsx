import React from 'react';
import { useParams } from 'react-router-dom';
import { useStarWarsPlanets } from '../hooks/useStarWarsPlanets';


export const PlanetasById = () => {
    const { id } = useParams();
    const { planets } = useStarWarsPlanets();
    const selectedPlanet = planets.find(planet => planet.name === id);

    return (
        <div className='container d-flex justify-content-center align-items-center text-center'>
            <div className='row containerInfo__inicio'>
                <p>{selectedPlanet?.name}</p>
                <div className='col-6'>
                    <h2>Diámetro: {selectedPlanet?.diameter}</h2>
                    <h2>Clima: {selectedPlanet?.climate}</h2>
                    <h2>Población: {selectedPlanet?.population}</h2>
                </div>
                <div className='col-6'>
                    {selectedPlanet && (
                        <div className='container'>
                            <h2>{selectedPlanet.name}</h2>
                            <h4>Diámetro: {selectedPlanet.diameter}</h4>
                            <h4>Clima: {selectedPlanet.climate}</h4>
                            <h4>Gravedad: {selectedPlanet.gravity}</h4>
                            <h4>Población: {selectedPlanet.population}</h4>
                            <h4>Período de rotación: {selectedPlanet.rotation_period}</h4>
                            <h4>Período orbital: {selectedPlanet.orbital_period}</h4>
                            <h4>Terreno: {selectedPlanet.terrain}</h4>
                            <h4>Agua en superficie: {selectedPlanet.surface_water}</h4>
                        </div>
                    )}
                    {!selectedPlanet && <h2>Cargando especificaciones del planeta...</h2>}
                </div>
            </div>
        </div>
    );
};
