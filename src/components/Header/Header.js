import React from 'react';
import './header.css';

function Header() {
    return (
        <header id="home">
            <div className="container header__container">
                <h1>Robert Slocumbe</h1>
                <h5 className="text-light">Full-Stack Web Developer</h5>
            </div>
        </header>
    );
}

export default Header;