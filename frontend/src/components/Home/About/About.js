import React from 'react';
import { useTheme } from "../../Shared/ThemeContext/ThemeContext";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './About.css';

const STATS = [
    { number: '35+', label: 'Years of Legacy' },
    { number: 'Tier 1', label: 'Firm Rankings' },
    { number: '10k+', label: 'Successful Resolutions' },
];

const About = () => {
    const { isDarkTheme } = useTheme();

    return (
        <section className={`about-section liquid-glass-style ${isDarkTheme ? 'dark-theme' : 'light-theme'}`} id="about">
            <div className="about-container">
                <div className="about-grid">
                    
                    {/* LEFT CONTENT */}
                    <div className="about-content-wrapper">
                        <div className="about-sticky-content glass-panel">
                            <h4 className="about-eyebrow">ABOUT OUR FIRM</h4>
                            <h2 className="about-title">Rooted in Chennai.<br/>Focused on Results.</h2>
                            <div className="about-accent-line"></div>
                            
                            <p className="about-description justified-text">
                                Founded on the core principles of integrity, transparency, and relentless advocacy, Chennai Lawyers (JSM Associates & Innovation) represents a convergence of profound legal scholarship and aggressive litigation strategy. 
                            </p>
                            <p className="about-description justified-text">
                                We combine deep legal expertise with practical insight to help our clients navigate complex legal challenges. Our multidisciplinary team of seasoned advocates collaborates seamlessly to provide tailored, strategic legal solutions designed to secure decisive victories.
                            </p>

                            <div className="about-action-wrapper">
                                <Link to="/about" className="apple-btn primary-btn">
                                    DISCOVER OUR FIRM
                                    <ArrowRight size={18} strokeWidth={2} style={{ marginLeft: '8px' }} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT (STATS & IMAGE) */}
                    <div className="about-visuals-wrapper">
                        <div className="about-stats-container">
                            {STATS.map((stat, index) => (
                                <div className="stat-glass-card" key={index}>
                                    <h3 className="stat-number">{stat.number}</h3>
                                    <p className="stat-label">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="about-image-container">
                            <img
                                className="about-image"
                                src={`${process.env.PUBLIC_URL}/intellectual-property.jpg`}
                                alt="Members of the ChennaiLawyers team in discussion"
                                loading="lazy"
                            />
                            <div className="about-image-overlay"></div>
                            
                            <div className="about-quote-box glass-panel">
                                <p className="about-quote">
                                    "Good lawyering is not just about knowing the law, but understanding people and their business."
                                </p>
                                <div className="quote-divider"></div>
                                <p className="quote-author">Founding Partner</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
