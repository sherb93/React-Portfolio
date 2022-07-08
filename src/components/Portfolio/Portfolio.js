import React from 'react';
import './portfolio.css';
import IMG1 from "../../assets/socialnetwork.PNG"
import IMG2 from "../../assets/beerbuddy.PNG"
import IMG3 from "../../assets/cms.PNG"
import IMG4 from "../../assets/quiz.png"
import IMG5 from "../../assets/weather.PNG"
import IMG6 from "../../assets/socialnetwork.PNG"

function Portfolio() {
    return (
        <section id="portfolio">
            <h2>PORTFOLIO</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt="socialnetwork project" />
                    </div>
                    <h3>Beer Buddy</h3>
                    <div className="portfolio__item-cta">
                        <a href="" className="btn">Github</a>
                        <a href="" className="btn btn-primary" target="_blank">Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt="socialnetwork project" />
                    </div>
                    <h3>Company CMS</h3>
                    <div className="portfolio__item-cta">
                        <a href="" className="btn">Github</a>
                        <a href="" className="btn btn-primary" target="_blank">Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG5} alt="socialnetwork project" />
                    </div>
                    <h3>Weather App</h3>
                    <div className="portfolio__item-cta">
                        <a href="" className="btn">Github</a>
                        <a href="" className="btn btn-primary" target="_blank">Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="socialnetwork project" />
                    </div>
                    <h3>Social Network API</h3>
                    <div className="portfolio__item-cta">
                        <a href="" className="btn">Github</a>
                        <a href="" className="btn btn-primary" target="_blank">Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG4} alt="socialnetwork project" />
                    </div>
                    <h3>Coding Quiz</h3>
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