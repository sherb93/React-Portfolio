import React from 'react';
import CTA from './CTA'
import SocialBtns from './SocialBtns'
import './header.css';

function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello</h5>
                <h1>Robert Slocumbe</h1>
                <h5 className="text-light">Full-Stack Web Developer</h5>
                <CTA />

                <div className="me">
                    <img src="" alt="selfie" />
                </div>

                <SocialBtns />
            </div>
        </header>
    );
}

export default Header;