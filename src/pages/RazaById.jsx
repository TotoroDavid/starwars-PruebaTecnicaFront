import { useParams } from 'react-router-dom';
import { useStarWarsSpecies } from '../hooks/useStarWarsSpecies';
import React from 'react';
import { useStarWarsInfo } from '../hooks/useStarWarsInfo';

export const RazaById = () => {
    const { id } = useParams();
    const { species } = useStarWarsSpecies();
    const selectedSpecie = species.find(specie => specie.name === id);
    const { films, people } = useStarWarsInfo(selectedSpecie);

    return (
        <div className='container'>
            <div className="row d-flex justify-content-center align-items-center text-center">
                {selectedSpecie ? (
                    <div className='containerInfo__inicio'>
                        <p className="col-12 ">{selectedSpecie.name}</p>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="card">
                                    <div className="card-body card-body d-flex flex-column justify-content-center containerInfo__inicio">
                                        <h4 className="card-text">Classification: {selectedSpecie.classification}</h4>
                                        <h4 className="card-text">Designation: {selectedSpecie.designation}</h4>
                                        <h4 className="card-text">Average Height: {selectedSpecie.average_height}</h4>
                                        <h4 className="card-text">Skin Colors: {selectedSpecie.skin_colors}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 pop_up'>
                                <div className="card">
                                    <div className="card-body">
                                        <div>
                                            <h4 className="m-4 card-text">
                                                <h2>
                                                    Hair Colors:
                                                </h2> {selectedSpecie.hair_colors}</h4>
                                            <h4 className="m-4 card-text">
                                                <h2>
                                                    Eye Colors:
                                                </h2>
                                                {selectedSpecie.eye_colors}</h4>
                                            <h4 className="m-4 card-text">
                                                <h2>
                                                </h2>
                                                {selectedSpecie.average_lifespan}</h4>
                                            <h2>
                                                Average Lifespan:
                                            </h2>
                                            <h4 className="m-4 card-text">
                                                <h2>
                                                    Language:
                                                </h2>
                                                {selectedSpecie.language}</h4>
                                            <h4 className="m-4 card-text">
                                                <h2>
                                                    People:
                                                </h2>
                                            </h4>
                                            <ul>

                                                {people.map((person, index) => (
                                                    <h4 key={index}>{person}</h4>
                                                ))}
                                            </ul>
                                        </div>
                                        <h2 className="card-text">Films:</h2>
                                        <ul>
                                            {films.map((film, index) => (
                                                <h4 key={index}>{film}</h4>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h2 className="col-12">Specie is Loading</h2>
                )}
            </div>
        </div>
    )
};
