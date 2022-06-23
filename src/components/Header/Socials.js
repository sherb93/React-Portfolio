import React from 'react';
import Resume from '../../assets/resume.pdf'


function Socials() {
    return (
        <div className="socials">
            <a href={Resume} download className="btn">Resume</a>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
    );
}

export default Socials;