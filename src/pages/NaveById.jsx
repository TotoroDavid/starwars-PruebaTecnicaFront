import { useParams } from 'react-router-dom';
import React from 'react';
import { useStarWarsShips } from '../hooks/useStarWarsShips';

export const NaveById = () => {
    const { id } = useParams();
    const { ships } = useStarWarsShips();
    const selectedShip = ships.find(ship => ship.name === id);


    return (
        <div className='container d-flex justify-content-center align-items-center text-center'>
            <div className='row containerInfo__inicio'>
                <p>{selectedShip?.name}</p>
                <div className='col-6'>
                    <h2>Modelo: {selectedShip?.model}</h2>
                    <h2>Longitud: {selectedShip?.length}</h2>
                    <h2>Pasajeros: {selectedShip?.passengers}</h2>
                    <h2>Velocidad: {selectedShip?.max_atmosphering_speed}</h2>
                </div>
                <div className='col-6'>
                    {selectedShip && (
                        <div className='container'>
                            <h2>{selectedShip.name}</h2>
                            <h4>Model: {selectedShip.model}</h4>
                            <h4>Manufacturer: {selectedShip.manufacturer}</h4>
                            <h4>Cost in Credits: {selectedShip.cost_in_credits}</h4>
                            <h4>Length: {selectedShip.length}</h4>
                            <h4>Max Atmosphering Speed: {selectedShip.max_atmosphering_speed}</h4>
                            <h4>Crew: {selectedShip.crew}</h4>
                            <h4>Passengers: {selectedShip.passengers}</h4>
                            <h4>Cargo Capacity: {selectedShip.cargo_capacity}</h4>
                            <h4>Consumables: {selectedShip.consumables}</h4>
                            <h4>Hyperdrive Rating: {selectedShip.hyperdrive_rating}</h4>
                            <h4>MGLT: {selectedShip.MGLT}</h4>
                            <h4>Starship Class: {selectedShip.starship_class}</h4>
                        </div>
                    )}
                    {!selectedShip && <h2>Cargando especificaciones de la nave...</h2>}
                </div>
            </div>
        </div>

    )
};
