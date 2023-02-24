import { useStarWarsPlanets } from '../hooks/useStarWarsPlanets';
import { Link } from 'react-router-dom';

export const Planetas = () => {
    const { planets } = useStarWarsPlanets();

    return (
        <div className='container'>
            <h1>Planetas de Star Wars</h1>
            <div className="row">
                {planets.map(planet => (
                    <div key={planet.name} className="col-sm-4 mb-4 pop_up">
                        <div className="card">
                            <div className="card-body containerInfo__inicio">
                                <p className="card-title">{planet.name}</p>
                                <h5 className="card-text">Clima: {planet.climate}</h5>
                                <h5 className="card-text">Diámetro: {planet.diameter}</h5>
                                <h5 className="card-text">Terreno: {planet.terrain}</h5>
                                <h5 className="card-text">Población: {planet.population}</h5>
                            </div>
                            <Link
                                to={`/planetas/${encodeURIComponent(planet.name)}`}
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
