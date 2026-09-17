import React, { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext/ThemeContext';
import './LegalDisclaimer.css';

const LegalDisclaimer = () => {
    const { isDarkTheme } = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasAgreed = localStorage.getItem('legalDisclaimerAgreed');
        if (!hasAgreed) {
            // Slight delay before showing popup for better UX
            const timer = setTimeout(() => {
                setIsVisible(true);
                document.body.style.overflow = 'hidden'; // prevent scrolling while popup is open
            }, 500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAgree = () => {
        localStorage.setItem('legalDisclaimerAgreed', 'true');
        setIsVisible(false);
        document.body.style.overflow = 'visible';
    };

    if (!isVisible) return null;

    return (
        <div className={`disclaimer-overlay ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            <div className="disclaimer-modal fade-in-up">
                <h2 className="disclaimer-title">Disclaimer</h2>
                
                <div className="disclaimer-content">
                    <p>
                        In compliance with the rules of the Bar Council of India, this website of ChennaiLawyers.net ( the "Firm" ) is meant solely for information about the Firm, its practice areas, advocates and solicitors and not for the purpose of advertising, soliciting work or inducement of any sort by the Firm or any of its members. Nor is it to be construed as legal advice of any nature or manner whatsoever.
                    </p>
                    <p>
                        The content of this website is also the Intellectual Property of the Firm.
                    </p>
                    <p>
                        Please read and accept our website's Terms of Use and our Privacy Policy. By clicking on 'I AGREE' below, the website visitor acknowledges that the information provided in is meant only for his/her understanding of the Firm and its activities.
                    </p>
                </div>

                <div className="disclaimer-footer">
                    <button className="agree-btn" onClick={handleAgree}>
                        I AGREE <span className="arrow-line"></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LegalDisclaimer;
