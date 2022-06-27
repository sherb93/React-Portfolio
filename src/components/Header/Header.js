import React from 'react';
import CTA from './CTA'
import Selfie from '../../assets/portrait.png'
import './header.css';

function Header() {
    return (
        <header id="home">
            <div className="container header__container">
                <h1>Robert Slocumbe</h1>
                <h5 className="text-light">Full-Stack Web Developer</h5>
                <CTA />
            </div>
        </header>
    );
}

export default Header;