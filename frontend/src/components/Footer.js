import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Twitter, Instagram, ChevronUp } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer-section">
            <div className="footer-container">
                {/* Column 1: Brand */}
                <div className="footer-col brand-col">
                    <h2 className="footer-logo-text">
                        Chennai<span className="footer-logo-highlight">Lawyers</span>.net
                    </h2>
                    <p className="footer-logo-sub">ADVOCATES & LEGAL CONSULTANTS</p>
                    <div className="footer-divider"></div>
                    <p className="footer-motto">Justice. Access. Community.</p>
                    
                    <div className="footer-newsletter">
                        <p className="newsletter-text">Subscribe to our legal insights</p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Email Address" className="newsletter-input" required />
                            <button type="submit" className="newsletter-btn">→</button>
                        </form>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-col">
                    <h4 className="footer-heading">QUICK LINKS</h4>
                    <ul className="footer-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#practice">Practice Areas</a></li>
                        <li><a href="#team">Our Team</a></li>
                        <li><a href="#insights">Insights</a></li>
                        <li><a href="#careers">Careers</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Column 3: Practice Areas */}
                <div className="footer-col">
                    <h4 className="footer-heading">PRACTICE AREAS</h4>
                    <ul className="footer-links">
                        <li><a href="#practice">Civil Litigation</a></li>
                        <li><a href="#practice">Corporate Law</a></li>
                        <li><a href="#practice">Property Law</a></li>
                        <li><a href="#practice">Dispute Resolution</a></li>
                        <li><a href="#practice">Regulatory & Compliance</a></li>
                        <li><a href="#practice">Intellectual Property</a></li>
                        <li><a href="#practice">Employment Law</a></li>
                        <li><a href="#practice">Taxation</a></li>
                    </ul>
                </div>

                {/* Column 4: Contact */}
                <div className="footer-col contact-col">
                    <h4 className="footer-heading">CONTACT</h4>
                    <ul className="footer-contact-list">
                        <li>
                            <MapPin size={16} />
                            <span>Chennai, Tamil Nadu, India</span>
                        </li>
                        <li>
                            <Phone size={16} />
                            <span>+91 44 0000 0000</span>
                        </li>
                        <li>
                            <Mail size={16} />
                            <span>info@chennailawyers.net</span>
                        </li>
                    </ul>
                    
                    <div className="footer-socials">
                        <a href="#linkedin" className="social-icon"><Linkedin size={18} /></a>
                        <a href="#twitter" className="social-icon"><Twitter size={18} /></a>
                        <a href="#instagram" className="social-icon"><Instagram size={18} /></a>
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