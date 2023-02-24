import { useParams } from 'react-router-dom';
import { useStarWarsFilms } from '../hooks/useStarWarsFilms';

export const PeliculasById = () => {
    const { id } = useParams();
    const decodedId = decodeURIComponent(id);
    const { films } = useStarWarsFilms();
    const selectedFilm = films.find(film => film.title === decodedId);

    return (
        <div className='row'>
            <div className='col-md-6'>
                {selectedFilm ? (
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='card'>
                                <div className='card-body containerInfo__inicio'>
                                    <h2 className='card-title'>{selectedFilm.title}</h2>
                                    <h4 className='card-text'>Director: {selectedFilm.director}</h4>
                                    <h4 className='card-text'>Producer: {selectedFilm.producer}</h4>
                                    <h4 className='card-text'>Release Date: {selectedFilm.release_date}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h2>Loading...</h2>
                )}
            </div>
            <div className='col-md-6'>
            </div>
        </div>
    );
};
