import React from 'react';
import logo from '../assets/RAM_LOGO_COLOR_DROPSHADOW.png'; // coloque aqui o caminho da imagem do logo
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="Navbar">
            <img src={logo} alt="Logo" className="Navbar-logo" />
            <ul className="Navbar-links">
                <li>Página 1</li>
                <li>Página 2</li>
                <li>Página 3</li>
            </ul>
        </nav>
    );
}

export default Navbar;