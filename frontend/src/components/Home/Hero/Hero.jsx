import React from 'react';
import { useTheme } from "../../Shared/ThemeContext/ThemeContext";
import './Hero.css';

const Hero = () => {
    const { isDarkTheme } = useTheme();

    return (
        <section className={`hero-section ${isDarkTheme ? 'dark-theme' : 'light-theme'}`} id="home">
            <img 
                src="/Satish-with-foreigh-deligates.jpg" 
                alt="Chennai Lawyers" 
                className="hero-background" 
            />
            <div className="hero-overlay"></div>
            
            <div className="hero-content fade-in-up">
                <p className="hero-eyebrow">Trusted legal partners in Chennai</p>

                <h1 className="hero-title">
                    Law. Perspective.<br />
                    Practice. <span className="hero-highlight">Progress.</span>
                </h1>

                <p className="hero-subtitle">
                    ChennaiLawyers.net is a premier full-service law firm based in Chennai, delivering 
                    practical, strategic legal solutions for individuals, businesses and institutions.
                </p>

                <div className="hero-cta-group">
                    <a href="#practice" className="apple-btn primary-btn">Our Practice Areas</a>
                    <a href="#contactus" className="apple-btn secondary-btn">Get In Touch</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
