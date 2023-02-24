import { useStarWarsSpecies } from '../hooks/useStarWarsSpecies';
import { Link } from 'react-router-dom';

export const Razas = () => {
    const { species } = useStarWarsSpecies();

    return (
        <div className='container'>
            <div className="row d-flex justify-content-center align-items-center text-center">
                <h2 className="col-12">Razas de Star Wars</h2>
                {species.map(specie => (
                    <div className="col-sm-4 mb-4 pop_up" key={specie.name}>
                        <div className="card">
                            <div className="card-body card-body d-flex flex-column justify-content-center containerInfo__inicio">
                                <p className="card-title">{specie.name}</p>
                                <h4 className="card-text">Classification: {specie.classification}</h4>
                                <h4 className="card-text">Designation: {specie.designation}</h4>
                                <h4 className="card-text">Average Height: {specie.average_height}</h4>
                                <h4 className="card-text">Skin Colors: {specie.skin_colors}</h4>
                            </div>
                            <Link
                                to={`/razas/${encodeURIComponent(specie.name)}`}
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
