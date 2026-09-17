import React from 'react';
import { useTheme } from "../../Shared/ThemeContext/ThemeContext";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './About.css';

const STATS = [
    { number: '10+', label: 'Years of Practice' },
    { number: '500+', label: 'Clients Advised' },
    { number: '1000+', label: 'Matters Handled' },
];

const About = () => {
    const { isDarkTheme } = useTheme();

    return (
        <section className={`about-section ${isDarkTheme ? 'dark-theme' : 'light-theme'}`} id="about">
            <div className="about-container">
                <div className="about-grid">
                    
                    {/* LEFT CONTENT */}
                    <div className="about-content-wrapper glass-panel">
                        <h4 className="about-eyebrow">ABOUT OUR FIRM</h4>
                        <h2 className="about-title">Rooted in Chennai.<br/>Focused on Results.</h2>
                        <div className="about-accent-line"></div>
                        
                        <p className="about-description justified-text">
                            With a commitment to legal excellence and client-centric solutions, ChennaiLawyers.net brings together a team of experienced advocates and legal professionals. We combine deep legal expertise with practical insight to help our clients navigate complex legal challenges.
                        </p>
                        <p className="about-description justified-text">
                            Our multidisciplinary team of seasoned advocates collaborates seamlessly to provide tailored, strategic legal solutions designed to secure decisive victories for our clients across various legal domains.
                        </p>

                        <div className="about-action-wrapper">
                            <Link to="/about" className="apple-btn primary-btn">
                                DISCOVER OUR FIRM
                                <ArrowRight size={18} strokeWidth={2} style={{ marginLeft: '8px' }} />
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT CONTENT (IMAGE & STATS) */}
                    <div className="about-visuals-wrapper">
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
                                    "Good lawyering is not just about knowing the law, but understanding people."
                                </p>
                                <div className="quote-divider"></div>
                                <p className="quote-author">ChennaiLawyers.net</p>
                            </div>
                        </div>

                        <div className="about-stats-container">
                            {STATS.map((stat, index) => (
                                <div className="stat-glass-card" key={index}>
                                    <h3 className="stat-number">{stat.number}</h3>
                                    <p className="stat-label">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
