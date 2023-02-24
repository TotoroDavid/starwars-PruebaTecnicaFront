import React from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
    { label: 'Naves', href: '/naves' },
    { label: 'Peliculas', href: '/peliculas' },
    { label: 'Personajes', href: '/personajes' },
    { label: 'Planetas', href: '/planetas' },
    { label: 'Razas', href: '/razas' }
];

export const Inicio = () => {
    return (
        <div className="card text-bg-dark container__inicio__">
            <img src="https://raw.githubusercontent.com/jsoviedo/starwars/master/src/assets/images/bg-star.jpg" className="card-img text-center" alt="..." />
            <div className="card-img-overlay d-flex justify-content-center">
                <div className='d-flex flex-column justify-content-center align-items-center text-center containerInfo__inicio'>
                    <p className="card-title pb-5">"Star Wars Data"</p>
                    <h1 className="card-text text-justify pb-5">Todo lo que siempre quisiste saber sobre planetas, naves, vehículos, personajes, películas y especies de las siete películas.</h1>
                    <h3 className="card-text text-justify pb-5"><small>Explora la informacion que quieras  y que la fuerza te acompañe. . .</small></h3>
                    <div className='m-2'>
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                className='btn btn-light m-2 btn_Inicio pop_up'
                                to={link.href}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}
