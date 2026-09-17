import { Link } from "react-router-dom";
import React from 'react';
import { useTheme } from "../../Shared/ThemeContext/ThemeContext";
import './PracticeAreas.css';

const PracticeAreas = () => {
    const { isDarkTheme } = useTheme();

    const practices = [
        { title: 'Civil Law', url: '/all-practices' },
        { title: 'Corporate Law', url: '/all-practices' },
        { title: 'Family Law', url: '/all-practices' },
        { title: 'Criminal Law', url: '/all-practices' },
        { title: 'Consumer Law', url: '/all-practices' },
        { title: 'Data Protection & Privacy', url: '/all-practices' },
        { title: 'Intellectual Property', url: '/all-practices' },
        { title: 'Narcotics & Drugs Act', url: '/all-practices' }
    ];

    return (
        <section className={`practice-section tlh-style ${isDarkTheme ? 'dark-theme' : 'light-theme'}`} id="practice-areas">
            <div className="practice-container tlh-container">
                <div className="tlh-layout">
                    
                    {/* Left Column (Sticky Header) */}
                    <div className="tlh-left">
                        <h2 className="tlh-title">Practice Areas</h2>
                        <div className="tlh-accent-line"></div>
                        <p className="tlh-description">
                            Our nuanced understanding of the legal landscape equips us to effectively counsel international and domestic businesses, operations and investments across varied practice areas
                        </p>
                    </div>

                    {/* Right Column (List of Links) */}
                    <div className="tlh-right">
                        {practices.map((practice, index) => (
                            <Link to={practice.url} key={index} className="tlh-practice-link">
                                <div>{practice.title}</div>
                                <div className="tlh-arrow-icon">
                                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.761719 1.62158L6.09616 6.95602L0.792858 12.2593" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                </div>
                                <div className="tlh-link-border"></div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PracticeAreas;
