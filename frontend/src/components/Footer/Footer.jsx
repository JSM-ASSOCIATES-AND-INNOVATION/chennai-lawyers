import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Twitter, Instagram, ChevronUp } from 'lucide-react';
import { useTheme } from "../Shared/ThemeContext/ThemeContext";
import './Footer.css';

const Footer = () => {
    const { isDarkTheme } = useTheme();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={`footer-section ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            <div className="footer-container">
                {/* TOP GRID */}
                <div className="footer-grid">
                    
                    {/* Brand Column */}
                    <div className="footer-col brand-col">
                        <h2 className="footer-logo-text">
                            Chennai<span className="footer-logo-highlight">Lawyers</span>.net
                        </h2>
                        <p className="footer-logo-sub">ADVOCATES & LEGAL CONSULTANTS</p>
                        <div className="footer-divider"></div>
                        <p className="footer-motto">Justice. Access. Community.</p>
                        
                        <div className="footer-socials">
                            <a href="#linkedin" className="social-icon"><Linkedin size={18} /></a>
                            <a href="#twitter" className="social-icon"><Twitter size={18} /></a>
                            <a href="#instagram" className="social-icon"><Instagram size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#about">About Firm</a></li>
                            <li><a href="#practice">Practice Areas</a></li>
                            <li><a href="/team">Our Council</a></li>
                            <li><a href="/blogs">News & Insights</a></li>
                            <li><a href="#contactus">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Info Column */}
                    <div className="footer-col contact-col">
                        <h4 className="footer-heading">Reach Us</h4>
                        <ul className="footer-contact-list">
                            <li>
                                <MapPin size={18} className="footer-icon" />
                                <span>No. 12, Legal Chambers, High Court Campus, Chennai, Tamil Nadu, 600104</span>
                            </li>
                            <li>
                                <Phone size={18} className="footer-icon" />
                                <span>+91 98849 25464</span>
                            </li>
                            <li>
                                <Mail size={18} className="footer-icon" />
                                <span>chennailawyers.net@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Map Column */}
                    <div className="footer-col map-col">
                        <h4 className="footer-heading">Location</h4>
                        <div className="footer-map-container">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3886.196901844222!2d80.2848!3d13.0878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f63459e99e7%3A0xc3b44b82d921dbfb!2sMadras%20High%20Court!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Madras High Court Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <p>© {new Date().getFullYear()} ChennaiLawyers.net. All rights reserved.</p>
                    
                    <div className="footer-bottom-right">
                        <div className="footer-legal-links">
                            <a href="#privacy">Privacy Policy</a>
                            <span className="separator">|</span>
                            <a href="#terms">Terms of Use</a>
                        </div>
                        
                        <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
                            <ChevronUp size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
