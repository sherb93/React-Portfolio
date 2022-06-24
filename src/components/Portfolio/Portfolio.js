import React from 'react';
import './portfolio.css';
import IMG1 from "../../assets/socialnetwork.PNG"

function Portfolio() {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="socialnetwork project" />
                    </div>
                    <h3>Project Title</h3>
                    <div className="portfolio__item-cta">
                        <a href="" className="btn">Github</a>
                        <a href="" className="btn btn-primary" target="_blank">Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="socialnetwork project" />
                    </div>
                    <h3>Project Title</h3>
                    <div className="portfolio__item-cta">
                        <a href="" className="btn">Github</a>
                        <a href="" className="btn btn-primary" target="_blank">Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="socialnetwork project" />
                    </div>
                    <h3>Project Title</h3>
                    <div className="portfolio__item-cta">
                        <a href="" className="btn">Github</a>
                        <a href="" className="btn btn-primary" target="_blank">Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="socialnetwork project" />
                    </div>
                    <h3>Project Title</h3>
                    <div className="portfolio__item-cta">
                        <a href="" className="btn">Github</a>
                        <a href="" className="btn btn-primary" target="_blank">Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="socialnetwork project" />
                    </div>
                    <h3>Project Title</h3>
                    <div className="portfolio__item-cta">
                        <a href="" className="btn">Github</a>
                        <a href="" className="btn btn-primary" target="_blank">Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="socialnetwork project" />
                    </div>
                    <h3>Project Title</h3>
                    <div className="portfolio__item-cta">
                        <a href="" className="btn">Github</a>
                        <a href="" className="btn btn-primary" target="_blank">Demo</a>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Portfolio;