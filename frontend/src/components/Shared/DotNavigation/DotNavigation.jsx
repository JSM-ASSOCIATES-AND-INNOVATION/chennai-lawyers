import React, { useEffect, useState } from 'react';
import './DotNavigation.css';

const DotNavigation = () => {
    const [activeSection, setActiveSection] = useState('home');
    const sections = ['home', 'practice-areas', 'about', 'insights', 'people', 'testimonials', 'contact', 'footer'];

    useEffect(() => {
        const handleScroll = () => {
            const container = document.getElementById('home-scroll-container');
            if (!container) return;

            const scrollPosition = container.scrollTop;
            const windowHeight = window.innerHeight;
            
            // Calculate which section is most visible
            const currentSectionIndex = Math.round(scrollPosition / windowHeight);
            
            if (currentSectionIndex >= 0 && currentSectionIndex < sections.length) {
                setActiveSection(sections[currentSectionIndex]);
            }
        };

        const container = document.getElementById('home-scroll-container');
        if (container) {
            container.addEventListener('scroll', handleScroll, { passive: true });
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, [sections]);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        const container = document.getElementById('home-scroll-container');
        if (element && container) {
            container.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="dot-navigation">
            {sections.map((id) => (
                <button
                    key={id}
                    className={`dot-nav-btn ${activeSection === id ? 'active' : ''}`}
                    onClick={() => scrollTo(id)}
                    aria-label={`Scroll to ${id}`}
                >
                    <span className="dot-indicator"></span>
                </button>
            ))}
        </div>
    );
};

export default DotNavigation;
