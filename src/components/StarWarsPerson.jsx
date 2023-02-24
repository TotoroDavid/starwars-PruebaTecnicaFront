import React from 'react'
import { Link } from 'react-router-dom';

export const StarWarsPerson = ({ person }) => {
    return (
        <div className="col-sm-4 mb-4">
            <div className="card">
                <div className="card-body containerInfo__inicio">
                    <p className="card-title">{person.name}</p>
                    <h3 className="card-text">Height: {person.height}</h3>
                    <h3 className="card-text">Mass: {person.mass}</h3>
                    <h3 className="card-text">Hair Color: {person.hair_color}</h3>
                    <h3 className="card-text">Skin Color: {person.skin_color}</h3>
                </div>
                <Link
                    to={`/personajes/${encodeURIComponent(person.name)}`}
                    className='btn btn-dark m-5 btn_Inicio pop_up'>
                    Ver mas
                </Link>
            </div>
        </div>
    )
}
