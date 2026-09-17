import { Link } from "react-router-dom";
import React from 'react';
import { useTheme } from "../../Shared/ThemeContext/ThemeContext";
import './About.css';

const About = () => {
    const { isDarkTheme } = useTheme();

    return (
        <section className={`about-section ${isDarkTheme ? 'dark-theme' : 'light-theme'}`} id="about">
            <div className="about-container">
                {/* Left Side: Text Content */}
                <div className="about-content">
                    <h4 className="about-subtitle">ABOUT US</h4>
                    <h2 className="about-title">Rooted in Chennai.<br/>Focused on Results.</h2>
                    <p className="about-description">
                        With a commitment to legal excellence and client-centric solutions, ChennaiLawyers.net brings together a team of experienced advocates and legal professionals. We combine deep legal expertise with practical insight to help our clients navigate complex legal challenges.
                    </p>

                    <a href="#our-firm" className="apple-btn primary-btn about-btn">
                        OUR FIRM <span style={{marginLeft: '8px'}}>→</span>
                    </a>

                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Years of Practice</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Clients Advised</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">1000+</span>
                            <span className="stat-label">Matters Handled</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Image and Quote */}
                <div className="about-image-wrapper">
                    <div className="about-image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/intellectual-property.jpg)` }}>
                        <div className="about-quote-overlay">
                            <p className="about-quote">
                                "Good lawyering is not just about knowing the law, but understanding people."
                            </p>
                            <div className="quote-divider"></div>
                            <p className="quote-author">CHENNAILAWYERS.NET</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;