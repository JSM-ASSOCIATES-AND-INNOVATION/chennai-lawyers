import React, { useEffect } from 'react';
import { useTheme } from "../../Shared/ThemeContext/ThemeContext";
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
    const { isDarkTheme } = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`contact-page ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            <section className="contact-hero">
                <div className="contact-hero-content">
                    <h4 className="page-eyebrow">GET IN TOUCH</h4>
                    <h1 className="page-title">We're Here to Help.</h1>
                    <p className="page-subtitle">
                        Reach out to our team of legal experts to discuss your requirements. We provide confidential, strategic counsel tailored to your needs.
                    </p>
                </div>
            </section>

            <section className="contact-main-section">
                <div className="contact-page-container">
                    <div className="contact-grid">
                        
                        {/* Left Side: Contact Info */}
                        <div className="contact-info-col">
                            <h2 className="section-title">Our Offices</h2>
                            <p className="section-paragraph">
                                JSM Associates & Innovation operates out of prime locations in Chennai, ensuring we are accessible when you need us most.
                            </p>
                            
                            <div className="info-card">
                                <MapPin className="info-icon" size={24} />
                                <div>
                                    <h3>Headquarters</h3>
                                    <p>123 Legal Avenue, High Court Road<br/>Chennai, Tamil Nadu 600104<br/>India</p>
                                </div>
                            </div>
                            
                            <div className="info-card">
                                <Phone className="info-icon" size={24} />
                                <div>
                                    <h3>Direct Line</h3>
                                    <p>+91 44 0000 0000<br/>+91 98849 25464</p>
                                </div>
                            </div>
                            
                            <div className="info-card">
                                <Mail className="info-icon" size={24} />
                                <div>
                                    <h3>Email Inquiries</h3>
                                    <p>info@chennailawyers.net<br/>careers@chennailawyers.net</p>
                                </div>
                            </div>
                            
                            <div className="info-card">
                                <Clock className="info-icon" size={24} />
                                <div>
                                    <h3>Business Hours</h3>
                                    <p>Monday - Friday: 9:00 AM - 7:00 PM<br/>Saturday: 10:00 AM - 2:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="contact-form-col">
                            <div className="contact-glass-panel">
                                <h2>Send a Message</h2>
                                <form className="page-contact-form" onSubmit={(e) => e.preventDefault()}>
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input type="text" className="page-input" placeholder="John Doe" required />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <input type="email" className="page-input" placeholder="john@example.com" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input type="tel" className="page-input" placeholder="+91 00000 00000" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Subject</label>
                                        <input type="text" className="page-input" placeholder="How can we assist you?" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea className="page-input page-textarea" rows="5" placeholder="Provide details about your inquiry..." required></textarea>
                                    </div>
                                    <button type="submit" className="apple-btn primary-btn submit-btn">
                                        SUBMIT INQUIRY
                                    </button>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
