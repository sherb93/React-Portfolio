import React from 'react';
import SocialBtns from './SocialBtns'
import UgaIMG from '../../assets/uga_logo.jpg'
import GaTechIMG from '../../assets/gatech_logo.jpg'
import SynovusIMG from '../../assets/synovus_logo.png'
import Selfie from '../../assets/portrait.png'
import './about.css';

function About() {
    return (
        <section id="about">
            <h2>ABOUT ME</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Selfie} alt="Robert's handsome face" />
                    </div>
                    <SocialBtns />
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="box about__card">
                            <img src={GaTechIMG} alt="uga logo" className="about__icon" />
                            <h5>Certificate</h5>
                            <small>Fullstack Web Development</small>
                            <small>The Georgia Institute of Technology</small>
                        </article>
                        <article className="box about__card">
                            <img src={UgaIMG} alt="uga logo" className="about__icon" />
                            <h5>Bachelor's</h5>
                            <small>B.S. Financial Planning</small>
                            <small>The University of Georgia</small>
                        </article>
                        <article className="box about__card">
                            <img src={SynovusIMG} alt="uga logo" className="about__icon" />
                            <h5>Universal Banker</h5>
                            <small>3 Years</small>
                            <small>Synovus Bank</small>
                        </article>
                    </div>

                    <p>
                        I am a passionate fullstack developer who values creative problem solving and communication. My education includes a bachelor’s degree in Financial Planning from the University of Georgia, and a Certificate in Fullstack Web Development from The Georgia Institute of Technology. I have experience building MERN stack apps and fullstack apps using the MVC structure. My experience working in a professional setting within the finance industry supplied me with the soft skills needed to work well with any team. With each assignment, I strive to convey the client’s branding and mission with sleek and thoughtful design that exceeds expectations. 
                    </p>

                </div>
            </div>
        </section>
    );
}

export default About;