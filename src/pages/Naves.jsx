import React from 'react';
import { Link } from 'react-router-dom'
import { useStarWarsShips } from '../hooks/useStarWarsShips';

export const Naves = () => {
    const { ships } = useStarWarsShips();

    return (
        <div className='container'>
            <h1>Naves</h1>
            <div className="row">
                {ships.map((ship, index) => (
                    <div key={index} className="col-sm-4 mb-4 pop_up d-flex flex-column justify-content-center">
                        <div className="card ">
                            <div className="card-body containerInfo__inicio">
                                <p className="card-title">{ship.name}</p>
                                <h3 className="card-text">Modelo: {ship.model}</h3>
                                <h3 className="card-text">Longitud: {ship.length}</h3>
                                <h3 className="card-text">Pasajeros: {ship.passengers}</h3>
                                <h3 className="card-text">Velocidad: {ship.max_atmosphering_speed}</h3>
                            </div>
                            <Link
                                to={`/naves/${encodeURIComponent(ship.name)}`}
                                className='btn btn-dark m-5 btn_Inicio pop_up'>
                                Ver mas
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
