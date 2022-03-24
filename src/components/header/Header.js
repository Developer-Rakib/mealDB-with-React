import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/logo-small.png';

const Header = ({ cartCount, openModal }) => {
    return (
        <div className='nav-container'>
            <nav className='container d-flex justify-content-between'>
                <img src={logo} alt="" />
                <ul>
                    <li href="/home">Home</li>
                    <li href="/meal">Meal</li>
                    <li href="/api" onClick={openModal}>Cart <span>{cartCount}</span></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;