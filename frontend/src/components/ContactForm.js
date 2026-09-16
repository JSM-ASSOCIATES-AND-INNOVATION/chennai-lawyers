import React from 'react';
import { useTheme } from './ThemeContext';
import '../styles/ContactForm.css';

const ContactForm = () => {
    const { isDarkTheme } = useTheme();

    return (
        <section className={`contact-banner ${isDarkTheme ? 'dark-theme' : 'light-theme'}`} id="contact">
            {/* Madras High Court / Courthouse Image */}
            <div className="contact-background" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80)` }}></div>
            <div className="contact-overlay"></div>
            
            <div className="contact-banner-container">
                <div className="contact-banner-content">
                    <h4 className="contact-eyebrow">WORK WITH US</h4>
                    <h2 className="contact-title">Let's Discuss Your Legal Needs</h2>
                    <p className="contact-description">
                        Get in touch with our team for a consultation.
                    </p>
                </div>
                
                <div className="contact-banner-action">
                    <a href="/contact" className="apple-btn primary-btn">
                        CONTACT US <span style={{marginLeft: '8px'}}>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;