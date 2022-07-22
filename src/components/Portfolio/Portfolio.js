import React from 'react';
import './portfolio.css';
import IMG1 from "../../assets/socialnetwork.PNG"
import IMG2 from "../../assets/beerbuddy.PNG"
import IMG3 from "../../assets/cms.PNG"
import IMG4 from "../../assets/quiz.png"
import IMG5 from "../../assets/weather.PNG"
import IMG6 from "../../assets/weatherapp.PNG"

function Portfolio() {
    return (
        <section id="portfolio">
            <h2>PORTFOLIO</h2>

            <div className="container portfolio__container">
                <article className="box portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt="beer buddy project" />
                    </div>
                    <div className="portfolio__description">
                        <h3>Beer Buddy</h3>
                        <small><em>Technologies: </em> JS | jQuery</small>
                        <small><em>Description: </em> A brewery review app that fetches local breweries for any US city.</small>
                    </div>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/sherb93/beer_buddy" className="btn" target="_blank">Github</a>
                        <a href="https://sherb93.github.io/beer_buddy/" className="btn btn-primary" target="_blank">Demo</a>
                    </div>
                </article>
                <article className="box portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt="sql project" />
                    </div>
                    <div className="portfolio__description">
                        <h3>Employee CMS</h3>
                        <small><em>Technologies: </em>SQL | MySQL | Sequelize</small>
                        <small><em>Description: </em>An employee database interface used in the terminal to get and manipulate employee data.</small>
                    </div>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/sherb93/Employee-CMS" className="btn" target="_blank">Github</a>
                    </div>
                </article>
                <article className="box portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG5} alt="weather app project" />
                    </div>
                    <div className="portfolio__description">
                        <h3>Weather N.O.W.</h3>
                        <small><em>Technologies: </em>JS | jQuery | Momentjs</small>
                        <small><em>Description: </em>A weather app for any location in the world that shows current and forecasted weather.</small>
                    </div>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/sherb93/Weather-App" className="btn" target="_blank">Github</a>
                        <a href="https://sherb93.github.io/Weather-App/" className="btn btn-primary" target="_blank">Demo</a>
                    </div>
                </article>
                <article className="box portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="social network api project" />
                    </div>
                    <div className="portfolio__description">
                        <h3>Social Network API</h3>
                        <small><em>Technologies: </em>MongoDB | Mongoose</small>
                        <small><em>Description: </em>A small-scale API designed for a social media platform using NoSQL with MongoDB.</small>
                    </div>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/sherb93/Social-Network-API" className="btn" target="_blank">Github</a>
                    </div>
                </article>
                <article className="box portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG4} alt="coding quiz project" />
                    </div>
                    <div className="portfolio__description">
                        <h3>Coding Quiz</h3>
                        <small><em>Technologies: </em>JS | HTML | CSS</small>
                        <small><em>Description: </em>Quizzes users on their coding knowledge and saves highscores to localstorage.</small>
                    </div>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/sherb93/Multiple-Choice-Quiz" className="btn" target="_blank">Github</a>
                        <a href="https://sherb93.github.io/Multiple-Choice-Quiz/" className="btn btn-primary" target="_blank">Demo</a>
                    </div>
                </article>
                <article className="box portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG6} alt="daily scheduler project" />
                    </div>
                    <div className="portfolio__description">
                        <h3>Daily Schedule</h3>
                        <small><em>Technologies: </em>JS | jQuery | Bootstrap | Momentjs</small>
                        <small><em>Description: </em>A daily schedule app that saves tasks and tracks the time and date.</small>
                    </div>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/sherb93/Work-Day-Scheduler" className="btn" target="_blank">Github</a>
                        <a href="https://sherb93.github.io/Work-Day-Scheduler/" className="btn btn-primary" target="_blank">Demo</a>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Portfolio;