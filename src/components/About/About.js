import React from 'react';
import { AiOutlineUser } from 'react-icons/ai'
import Selfie from '../../assets/portrait.png'
import './about.css';

function About() {
    return (
        <section id="about">
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Selfie} alt="Robert's handsome face" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <AiOutlineUser className="about__icon" />
                            <h5>Certificate</h5>
                            <small>Fullstack Web Development</small>
                            <small>The Georgia Institute of Technology</small>
                        </article>
                        <article className="about__card">
                            <AiOutlineUser className="about__icon" />
                            <h5>Bachelor's</h5>
                            <small>B.S. Financial Planning</small>
                            <small>The University of Georgia</small>
                        </article>
                        <article className="about__card">
                            <AiOutlineUser className="about__icon" />
                            <h5>Universal Banker</h5>
                            <small>3 Years</small>
                            <small>Synovus Bank</small>
                        </article>
                    </div>

                    <p>
                        Hi, I'm Robert and this is where I'm writing about myself.
                        Hi, I'm Robert and this is where I'm writing about myself.
                        Hi, I'm Robert and this is where I'm writing about myself.
                        Hi, I'm Robert and this is where I'm writing about myself.
                        Hi, I'm Robert and this is where I'm writing about myself.
                    </p>

                    <a href="contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;