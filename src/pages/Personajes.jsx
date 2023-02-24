import React from 'react';
import { Link } from 'react-router-dom';
import { useStarWarsPeople } from '../hooks/useStarWarsPeople';

export const Personajes = () => {
    const { people } = useStarWarsPeople();

    return (
        <div className='container'>
            <h1>Personajes de Star Wars</h1>
            <div className="row">
                {people.map(person => (
                    <div key={person.name} className="col-sm-4 mb-4 pop_up">
                        <div className="card">
                            <div className="card-body containerInfo__inicio">
                                <p className="card-title">{person.name}</p>
                                <h5 className="card-text">Altura: {person.height}</h5>
                                <h5 className="card-text">Masa: {person.mass}</h5>
                                <h5 className="card-text">Color de pelo: {person.hair_color}</h5>
                                <h5 className="card-text">Color de piel: {person.skin_color}</h5>
                            </div>
                            <Link
                                to={`/personajes/${encodeURIComponent(person.name)}`}
                                className='btn btn-dark m-5 btn_Inicio pop_up'>
                                Ver mas
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
