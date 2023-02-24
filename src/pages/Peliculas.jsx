
import { useStarWarsFilms } from '../hooks/useStarWarsFilms';
import { Link } from 'react-router-dom';

export const Peliculas = () => {
    const { films } = useStarWarsFilms();
    console.log(films);

    return (
        <div className='container'>
            <h1>Peliculas</h1>
            <div className="row">
                {films.map(film => (
                    <div key={film.url} className="col-sm-4 mb-4">
                        <div className="card">
                            <div className="card-body containerInfo__inicio">
                                <p className="card-title">{film.title}</p>
                                <h4 className="card-text">Director: {film.director}</h4>
                                <h4 className="card-text">Producer: {film.producer}</h4>
                                <h4 className="card-text">Release Date: {film.release_date}</h4>
                            </div>
                            <Link
                                to={`/peliculas/${encodeURIComponent(film.title)}`}
                                className='btn btn-dark m-5 btn_Inicio pop_up'>
                                ver mas
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
