import React from 'react';
import {BsPatchCheckFill} from 'react-icons/bs'
import HTML from '../../assets/logos/html5.png';
import CSS from '../../assets/logos/css.png';
import JS from '../../assets/logos/javascript.png';
import ReactLogo from '../../assets/logos/react.png';
import jquery from '../../assets/logos/jquery.png';
import Bootstrap from '../../assets/logos/bootstrap.png';
import Node from '../../assets/logos/node.png';
import Mongodb from '../../assets/logos/mongodb.png';
import Express from '../../assets/logos/express.png';
import SQL from '../../assets/logos/sql.png';
import Sequelize from '../../assets/logos/sequelize.png';
import NPM from '../../assets/logos/npm.png';
import './experience.css';

function Experience() {
    return (
        <section id="experience">
            <h2>DEV EXPERINCE</h2>

            <div className="container experience__container">
                <div className="box experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <img src={HTML} alt="HTML5 logo" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <img src={CSS} alt="HTML5 logo" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Advnaced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <img src={JS} alt="HTML5 logo" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <img src={ReactLogo} alt="HTML5 logo" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <img src={jquery} alt="HTML5 logo" />
                            <div>
                                <h4>jQuery</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <img src={Bootstrap} alt="HTML5 logo" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="box experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <img src={Node} alt="HTML5 logo" />
                            <div>
                                <h4>Node.js</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <img src={Express} alt="HTML5 logo" />
                            <div>
                                <h4>Express.js</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <img src={Mongodb} alt="HTML5 logo" />
                            <div>
                                <h4>MongoDB</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <img src={SQL} alt="HTML5 logo" />
                            <div>
                                <h4>SQL</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <img src={Sequelize} alt="HTML5 logo" />
                            <div>
                                <h4>Sequelize</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <img src={NPM} alt="HTML5 logo" />
                            <div>
                                <h4>npm</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;