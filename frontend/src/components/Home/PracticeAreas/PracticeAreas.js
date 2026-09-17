import { Link } from "react-router-dom";
import React from 'react';
import { useTheme } from "../../Shared/ThemeContext/ThemeContext";
import { 
    Briefcase, ShieldAlert, Users, Shield, 
    Gavel, Pill, Landmark, Lightbulb, ArrowRight
} from 'lucide-react';
import './PracticeAreas.css';

const PracticeAreas = () => {
    const { isDarkTheme } = useTheme();

    const practices = [
        { title: 'Civil Law', icon: <Landmark size={22} strokeWidth={1.5} />, url: '/all-practices' },
        { title: 'Corporate Law', icon: <Briefcase size={22} strokeWidth={1.5} />, url: '/all-practices' },
        { title: 'Family Law', icon: <Users size={22} strokeWidth={1.5} />, url: '/all-practices' },
        { title: 'Criminal Law', icon: <Gavel size={22} strokeWidth={1.5} />, url: '/all-practices' },
        { title: 'Consumer Law', icon: <ShieldAlert size={22} strokeWidth={1.5} />, url: '/all-practices' },
        { title: 'Data Protection & Privacy', icon: <Shield size={22} strokeWidth={1.5} />, url: '/all-practices' },
        { title: 'Intellectual Property', icon: <Lightbulb size={22} strokeWidth={1.5} />, url: '/all-practices' },
        { title: 'Narcotics & Drugs Act', icon: <Pill size={22} strokeWidth={1.5} />, url: '/all-practices' }
    ];

    return (
        <section className={`practice-section liquid-glass-style ${isDarkTheme ? 'dark-theme' : 'light-theme'}`} id="practice-areas">
            <div className="practice-container">
                <div className="pg-layout">
                    
                    {/* Left Column (Sticky Header) */}
                    <div className="pg-left">
                        <div className="pg-sticky-content glass-panel">
                            <h4 className="pg-eyebrow">OUR EXPERTISE</h4>
                            <h2 className="pg-title">Comprehensive<br/>Legal Solutions.</h2>
                            <div className="pg-accent-line"></div>
                            <p className="pg-description">
                                Our nuanced understanding of the legal landscape equips us to effectively counsel international and domestic businesses, operations and investments across varied practice areas.
                            </p>

                            <div className="pg-action-wrapper">
                                <Link to="/all-practices" className="apple-btn primary-btn glass-btn">
                                    VIEW ALL PRACTICE AREAS <span style={{marginLeft: '8px'}}>→</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (List of Links with TLH Animation) */}
                    <div className="pg-right">
                        <div className="pg-list-wrapper">
                            {practices.map((practice, index) => (
                                <Link to={practice.url} key={index} className="pg-practice-card glass-card">
                                    <div className="pg-card-left">
                                        <div className="pg-icon-wrapper">
                                            {practice.icon}
                                        </div>
                                        <h3 className="pg-card-title">{practice.title}</h3>
                                    </div>
                                    <div className="pg-arrow-wrapper">
                                        <ArrowRight size={20} strokeWidth={1.5} />
                                    </div>
                                    {/* TLH-style animated bottom line */}
                                    <div className="pg-link-border-bg"></div>
                                    <div className="pg-link-border-active"></div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PracticeAreas;
