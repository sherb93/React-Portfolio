import React from 'react';
import Socials from './Socials'
import './header.css';

function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello</h5>
                <h1>Robert Slocumbe</h1>
                <h5 className="text-light">Full-Stack Web Developer</h5>
                <Socials />
            </div>
        </header>
    );
}

export default Header;