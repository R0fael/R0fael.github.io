import React from 'react'

import FeatureCard1 from './feature-card1'
import './home.css'

const Home = (props) => {
    return (
        <div className="home-container">
            <header data-thq="thq-navbar" className="home-navbar-interactive">
                <img
                    alt="logo"
                    src="https://raw.githubusercontent.com/R0fael/R0fael.github.io/b6cfe840650f48211956117ff1a1c80d916ef395/r0fael%20logo%202023.png"
                    className="home-image"
                />
                <div data-thq="thq-navbar-nav" className="home-desktop-menu">
                    <nav className="home-links">
                        <span>ADOS</span>
                        <span className="home-text01">Human Reverse</span>
                        <span className="home-text02">CreateAI</span>
                        <span className="home-text03">RBV</span>
                        <span className="home-text04">MonkieHorror</span>
                        <span className="home-text05">Github</span>
                    </nav>
                </div>
                <div data-thq="thq-burger-menu" className="home-burger-menu"></div>
                <div data-thq="thq-mobile-menu" className="home-mobile-menu"></div>
            </header>
            <div className="home-hero">
                <h1 className="home-text06">Let&apos;s be friends!</h1>
                <span className="home-text07">
                    <span className="home-text08">
                        I am R0fael - programmer.
                        <span
                            dangerouslySetInnerHTML={{
                                __html: ' ',
                            }}
                        />
                    </span>
                    <br className="home-text09"></br>
                    <span>Have a lot of projects and like program</span>
                    <br></br>
                </span>
                <div className="home-btn-group">
                    <button className="home-button button">Projects</button>
                    <button className="home-button1 button">About me</button>
                </div>
            </div>
            <div className="home-stats">
                <div className="home-stat">
                    <h1 className="home-text12">100+</h1>
                    <span className="home-text13">Projects</span>
                    <span className="home-text14">A lot of projects...</span>
                </div>
                <div className="home-stat1">
                    <h1 className="home-text15">10+</h1>
                    <span className="home-text16">Public Repositories</span>
                    <span className="home-text17">
                        You can press Ctrl+C and the Ctrl+V
                    </span>
                </div>
                <div className="home-stat2">
                    <h1 className="home-text18">4</h1>
                    <span className="home-text19">Active projects</span>
                    <span className="home-text20">Updates... :)</span>
                </div>
                <div className="home-stat3">
                    <h1 className="home-text21">5+</h1>
                    <span className="home-text22">
                        <span className="home-text23">Years of programming expirience</span>
                        <br></br>
                    </span>
                    <span className="home-text25">Code!,- Code! - Code! - Code!</span>
                </div>
            </div>
            <div className="home-features">
                <h1 className="home-text26">Up to date projects</h1>
                <div className="home-container1">
                    <FeatureCard1
                        title="ADOS"
                        rootClassName="rootClassName"
                    ></FeatureCard1>
                    <FeatureCard1
                        title="Monkie Horror"
                        rootClassName="rootClassName1"
                    ></FeatureCard1>
                    <FeatureCard1
                        title="R B V"
                        rootClassName="rootClassName2"
                    ></FeatureCard1>
                    <FeatureCard1
                        title="CreateAI"
                        rootClassName="rootClassName7"
                    ></FeatureCard1>
                </div>
            </div>
        </div>
    )
}

export default Home