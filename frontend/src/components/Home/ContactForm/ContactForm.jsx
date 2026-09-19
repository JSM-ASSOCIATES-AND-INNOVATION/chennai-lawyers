import React, { useState } from 'react';
import { useTheme } from "../../Shared/ThemeContext/ThemeContext";
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import './ContactForm.css';

const PRACTICE_AREAS = [
    'Corporate Law',
    'Family Law',
    'Criminal Law',
    'Civil Law',
    'Consumer Law',
    'Data Protection & Privacy',
    'Narcotics & Drugs Act',
    'Other'
];

const INITIAL_STATE = { name: '', email: '', phone: '', practiceArea: '', message: '' };

const ContactForm = () => {
    const { isDarkTheme } = useTheme();
    const [values, setValues] = useState(INITIAL_STATE);
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');
        setTimeout(() => setStatus('success'), 1500); // Mock submission
    };

    return (
        <section className={`contact-section ${isDarkTheme ? 'dark-theme' : 'light-theme'}`} id="contactus">
            <div className="contact-container">
                <div className="contact-grid">
                    
                    {/* LEFT COLUMN: CONTACT INFO */}
                    <div className="contact-info-column">
                        <h4 className="contact-eyebrow">GET IN TOUCH</h4>
                        <h2 className="contact-title">Let's Discuss<br/>Your Matter.</h2>
                        <div className="contact-accent-line"></div>
                        <p className="contact-description">
                            Reach out to schedule a confidential consultation. Our multidisciplinary team of advocates is ready to provide tailored, strategic legal solutions.
                        </p>
                        
                        <div className="contact-details-list">
                            <div className="contact-detail-item">
                                <div className="detail-icon"><MapPin size={20} /></div>
                                <div className="detail-text">
                                    <strong>Chambers</strong>
                                    <span>Chennai, Tamil Nadu, India</span>
                                </div>
                            </div>
                            <div className="contact-detail-item">
                                <div className="detail-icon"><Phone size={20} /></div>
                                <div className="detail-text">
                                    <strong>Phone</strong>
                                    <span>+91 98849 25464</span>
                                </div>
                            </div>
                            <div className="contact-detail-item">
                                <div className="detail-icon"><Mail size={20} /></div>
                                <div className="detail-text">
                                    <strong>Email</strong>
                                    <span>chennailawyers.net@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: THE FORM */}
                    <div className="contact-form-column">
                        <div className="contact-glass-panel">
                            {status === 'success' ? (
                                <div className="form-success-state">
                                    <h3 className="success-title">Request Received.</h3>
                                    <p className="success-message">Thank you for reaching out. One of our senior associates will contact you shortly to arrange a consultation.</p>
                                    <button className="apple-btn form-reset-btn" onClick={() => { setStatus('idle'); setValues(INITIAL_STATE); }}>
                                        Submit Another Inquiry
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="premium-form">
                                    <div className="form-row">
                                        <div className="input-group">
                                            <input type="text" name="name" value={values.name} onChange={handleChange} required placeholder="Full Name" />
                                        </div>
                                        <div className="input-group">
                                            <input type="tel" name="phone" value={values.phone} onChange={handleChange} required placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    
                                    <div className="input-group">
                                        <input type="email" name="email" value={values.email} onChange={handleChange} required placeholder="Email Address" />
                                    </div>
                                    
                                    <div className="input-group">
                                        <select name="practiceArea" value={values.practiceArea} onChange={handleChange} required className={values.practiceArea === "" ? "unselected" : ""}>
                                            <option value="" disabled>Select Practice Area</option>
                                            {PRACTICE_AREAS.map(area => (
                                                <option key={area} value={area}>{area}</option>
                                            ))}
                                        </select>
                                    </div>
                                    
                                    <div className="input-group">
                                        <textarea name="message" value={values.message} onChange={handleChange} required placeholder="Brief description of your legal matter..." rows="4"></textarea>
                                    </div>
                                    
                                    <button type="submit" disabled={status === 'submitting'} className="apple-btn submit-btn">
                                        {status === 'submitting' ? 'Submitting...' : 'Request Consultation'}
                                        {status !== 'submitting' && <ArrowRight size={18} className="btn-icon" />}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactForm;
