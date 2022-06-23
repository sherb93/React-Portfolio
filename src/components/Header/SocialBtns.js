import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './header.css';

function SocialBtns() {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/robert-slocumbe-111b5314b/" target="_blank" ><BsLinkedin /></a>
            <a href="https://github.com/sherb93" target="_blank" ><FaGithub /></a>
            {/* <a href="" target="_blank"></a> */}
        </div>
    );
}

export default SocialBtns;