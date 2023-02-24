import React, { useState } from 'react'
import { navLinks } from '../data/navLinks';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <nav className="navbar navbar-expand-lg text-white container__NavBar">
            <div className="container-fluid text-white">
                <Link
                    className='navbar-brand img_fluid'
                    to='/'>
                    <img src="https://www.pngfind.com/pngs/m/667-6679402_star-wars-logo-wallpaper-stars-wars-png-icon.png" alt="" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleExpanded}
                    aria-expanded={isExpanded}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav text-white">
                        {navLinks.map((link, index) => {
                            if (link.isDisabled) {
                                return (
                                    <li key={index} className="nav-item text-white pop_up">
                                        <a className="nav-link disabled text-white">{link.label}</a>
                                    </li>
                                );
                            } else {
                                return (
                                    <li key={index} className={`nav-item ${link.isActive ? 'active' : ''} pop_up`}>
                                        <Link
                                            className='nav-link'
                                            to={link.href}>
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
