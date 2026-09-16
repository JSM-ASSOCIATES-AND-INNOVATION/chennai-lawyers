import React from 'react';
import { useTheme } from './ThemeContext';
import { 
    Briefcase, ShieldAlert, Users, Shield, 
    Gavel, Pill, Landmark, Lightbulb 
} from 'lucide-react';
import '../styles/PracticeAreas.css';

const PracticeAreas = () => {
    const { isDarkTheme } = useTheme();

    const practices = [
        { title: 'Civil Law', icon: <Landmark size={40} strokeWidth={1.5} /> },
        { title: 'Corporate Law', icon: <Briefcase size={40} strokeWidth={1.5} /> },
        { title: 'Family Law', icon: <Users size={40} strokeWidth={1.5} /> },
        { title: 'Criminal Law', icon: <Gavel size={40} strokeWidth={1.5} /> },
        { title: 'Consumer Law', icon: <ShieldAlert size={40} strokeWidth={1.5} /> },
        { title: 'Data Protection & Privacy', icon: <Shield size={40} strokeWidth={1.5} /> },
        { title: 'Intellectual Property', icon: <Lightbulb size={40} strokeWidth={1.5} /> },
        { title: 'Narcotics & Drugs Act', icon: <Pill size={40} strokeWidth={1.5} /> }
    ];

    return (
        <section className={`practice-section ${isDarkTheme ? 'dark-theme' : 'light-theme'}`} id="practice-areas">
            <div className="practice-container">
                
                <div className="practice-header">
                    <div className="practice-header-left">
                        <h4 className="practice-eyebrow">OUR PRACTICE AREAS</h4>
                        <h2 className="practice-title">Comprehensive Legal Solutions</h2>
                    </div>
                    <div className="practice-header-right">
                        <a href="#all-practices" className="view-all-link">
                            VIEW ALL PRACTICE AREAS <span style={{marginLeft: '4px'}}>→</span>
                        </a>
                    </div>
                </div>

                <div className="practice-grid">
                    {practices.map((practice, index) => (
                        <div key={index} className="practice-card">
                            <div className="practice-icon">{practice.icon}</div>
                            <h3 className="practice-card-title">{practice.title}</h3>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default PracticeAreas;