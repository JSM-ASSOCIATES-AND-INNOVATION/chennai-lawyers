import React, { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext/ThemeContext';
import { X } from 'lucide-react';
import './CookieConsent.css';

const CookieConsent = () => {
    const { isDarkTheme } = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasConsented = localStorage.getItem('cookieConsentAgreed');
        // Only show if disclaimer is also agreed (to avoid 2 popups fighting for attention initially)
        const disclaimerAgreed = localStorage.getItem('legalDisclaimerAgreed');
        
        if (!hasConsented && disclaimerAgreed) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        } else if (!hasConsented) {
            // Keep checking if disclaimer got agreed
            const interval = setInterval(() => {
                if (localStorage.getItem('legalDisclaimerAgreed')) {
                    setIsVisible(true);
                    clearInterval(interval);
                }
            }, 2000);
            return () => clearInterval(interval);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsentAgreed', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={`cookie-banner fade-in-up ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            <div className="cookie-content">
                <p>
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies as described in our Privacy Policy.
                </p>
            </div>
            <div className="cookie-actions">
                <button className="apple-btn primary-btn cookie-btn" onClick={handleAccept}>
                    Accept
                </button>
                <button className="close-cookie" onClick={() => setIsVisible(false)}>
                    <X size={20} />
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
