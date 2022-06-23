import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './header.css';

// Social Media buttons imported from react icons npm package
function SocialBtns() {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/robert-slocumbe-111b5314b/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/sherb93" target="_blank" rel="noreferrer"><FaGithub /></a>
        </div>
    );
}

export default SocialBtns;