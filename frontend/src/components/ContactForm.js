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
                        Get in touch with our team for a consultation. We are here to provide expert legal counsel tailored to your specific requirements.
                    </p>
                </div>
                
                <div className="contact-form-wrapper">
                    <form className="glass-contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input type="text" placeholder="Full Name" className="form-input" required />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <input type="email" placeholder="Email Address" className="form-input" required />
                            </div>
                            <div className="form-group">
                                <input type="tel" placeholder="Phone Number" className="form-input" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea placeholder="How can we help you?" className="form-input form-textarea" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="apple-btn primary-btn submit-btn">
                            SEND MESSAGE <span style={{marginLeft: '8px'}}>→</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;