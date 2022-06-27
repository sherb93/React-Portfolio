import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { AiFillFilePdf } from 'react-icons/ai';
import Resume from '../../assets/resume.pdf'
import './about.css';

// Social Media buttons imported from react icons npm package
function SocialBtns() {
    return (
        <div className="about__socials">
            <div className="social__block">
                <a href={Resume} target="_blank" rel="noreferrer"><AiFillFilePdf /></a>
                <small>Resume</small>
            </div>
            <div className="social__block">
                <a href="https://github.com/sherb93" target="_blank" rel="noreferrer"><FaGithub /></a>
                <small>GitHub</small>
            </div>
            <div className="social__block">
                <a href="https://www.linkedin.com/in/robert-slocumbe-111b5314b/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                <small>LinkedIn</small>
            </div>
        </div>
    );
}

export default SocialBtns;