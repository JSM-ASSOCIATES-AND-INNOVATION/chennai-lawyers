import React, { useState, useCallback, useMemo } from 'react';
import { useTheme } from "../../Shared/ThemeContext/ThemeContext";

/* ---------------------------------------------
   Config: practice areas shown in the dropdown.
   Edit this list to match the firm's actual practice groups.
--------------------------------------------- */
const PRACTICE_AREAS = [
    'Litigation & Disputes',
    'Corporate & Commercial',
    'Family Law',
    'Property & Real Estate',
    'Criminal Defense',
    'Intellectual Property',
    'Other',
];

const INITIAL_STATE = {
    name: '',
    email: '',
    phone: '',
    practiceArea: '',
    message: '',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
    const errors = {};
    if (!values.name.trim()) errors.name = 'Enter your full name.';
    if (!values.email.trim()) errors.email = 'Enter your email address.';
    else if (!EMAIL_RE.test(values.email)) errors.email = 'Enter a valid email address.';
    if (!values.phone.trim()) errors.phone = 'Enter a phone number.';
    if (!values.practiceArea) errors.practiceArea = 'Select a practice area.';
    if (!values.message.trim()) errors.message = 'Tell us briefly about your matter.';
    return errors;
}

const ContactForm = ({ onSubmit }) => {
    const { isDarkTheme } = useTheme();

    const [values, setValues] = useState(INITIAL_STATE);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    }, []);

    const handleBlur = useCallback((e) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
        setErrors(validate({ ...values, [name]: values[name] }));
    }, [values]);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        const nextErrors = validate(values);
        setErrors(nextErrors);
        setTouched({ name: true, email: true, phone: true, practiceArea: true, message: true });

        if (Object.keys(nextErrors).length > 0) return;

        setStatus('submitting');
        try {
            if (onSubmit) {
                await onSubmit(values);
            } else {
                // No handler wired up yet — replace with a real API call.
                await new Promise((resolve) => setTimeout(resolve, 900));
            }
            setStatus('success');
            setValues(INITIAL_STATE);
            setTouched({});
        } catch (err) {
            setStatus('error');
        }
    }, [values, onSubmit]);

    const isSubmitting = status === 'submitting';

    const fieldError = useMemo(() => (field) => (touched[field] && errors[field] ? errors[field] : ''), [touched, errors]);

    return (
        <section className={`contact-banner ${isDarkTheme ? 'dark-theme' : 'light-theme'}`} id="contact">
            <style>{CSS}</style>

            <div
                className="contact-background"
                style={{ backgroundImage: `url(https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80)` }}
                aria-hidden="true"
            />
            <div className="contact-overlay" aria-hidden="true" />

            <div className="contact-banner-container">
                <div className="contact-banner-content">
                    <h4 className="contact-eyebrow">Work with us</h4>
                    <h2 className="contact-title">Let's discuss your legal needs</h2>
                    <p className="contact-description">
                        Share a few details about your matter and a member of our team will get back to you
                        within one business day to arrange a consultation.
                    </p>

                    <ul className="contact-points" aria-hidden="true">
                        <li>Confidential initial review</li>
                        <li>Response within 1 business day</li>
                    </ul>
                </div>

                <div className="contact-form-wrapper">
                    {status === 'success' ? (
                        <div className="glass-contact-form form-success" role="status">
                            <h3>Message sent</h3>
                            <p>Thank you for reaching out. Our team will contact you shortly to schedule a consultation.</p>
                            <button type="button" className="text-btn" onClick={() => setStatus('idle')}>
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form className="glass-contact-form" onSubmit={handleSubmit} noValidate>
                            <div className="form-group">
                                <label htmlFor="cf-name">Full name</label>
                                <input
                                    id="cf-name"
                                    name="name"
                                    type="text"
                                    placeholder="Full name"
                                    className={`form-input ${fieldError('name') ? 'has-error' : ''}`}
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="name"
                                />
                                {fieldError('name') && <span className="field-error">{fieldError('name')}</span>}
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="cf-email">Email address</label>
                                    <input
                                        id="cf-email"
                                        name="email"
                                        type="email"
                                        placeholder="Email address"
                                        className={`form-input ${fieldError('email') ? 'has-error' : ''}`}
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        autoComplete="email"
                                    />
                                    {fieldError('email') && <span className="field-error">{fieldError('email')}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cf-phone">Phone number</label>
                                    <input
                                        id="cf-phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="Phone number"
                                        className={`form-input ${fieldError('phone') ? 'has-error' : ''}`}
                                        value={values.phone}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        autoComplete="tel"
                                    />
                                    {fieldError('phone') && <span className="field-error">{fieldError('phone')}</span>}
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="cf-practice">Practice area</label>
                                <select
                                    id="cf-practice"
                                    name="practiceArea"
                                    className={`form-input form-select ${fieldError('practiceArea') ? 'has-error' : ''}`}
                                    value={values.practiceArea}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    <option value="" disabled>Select a practice area</option>
                                    {PRACTICE_AREAS.map((area) => (
                                        <option key={area} value={area}>{area}</option>
                                    ))}
                                </select>
                                {fieldError('practiceArea') && <span className="field-error">{fieldError('practiceArea')}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="cf-message">How can we help you?</label>
                                <textarea
                                    id="cf-message"
                                    name="message"
                                    placeholder="Briefly describe your matter"
                                    className={`form-input form-textarea ${fieldError('message') ? 'has-error' : ''}`}
                                    rows="4"
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {fieldError('message') && <span className="field-error">{fieldError('message')}</span>}
                            </div>

                            {status === 'error' && (
                                <p className="form-status-error" role="alert">
                                    Something went wrong sending your message. Please try again.
                                </p>
                            )}

                            <button type="submit" className="apple-btn primary-btn submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending…' : (
                                    <>Send message <span className="btn-arrow" aria-hidden="true">→</span></>
                                )}
                            </button>

                            <p className="form-disclaimer">
                                Submitting this form does not create an attorney-client relationship.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactForm;

/* ---------------------------------------------
   Styles — dual theme via CSS variables scoped
   to .contact-banner, toggled by .dark-theme /
   .light-theme on the same element.
--------------------------------------------- */
const CSS = `
.contact-banner {
    --gold: #C49B55;
    --gold-soft: rgba(196, 155, 85, 0.2);
    position: relative;
    padding: 6rem 5%;
    display: flex;
    align-items: center;
    min-height: 100vh;
    scroll-snap-align: start;
    overflow-y: auto;
    overflow-x: hidden;
}

.contact-banner.dark-theme {
    --bg: #0b1016;
    --overlay-start: rgba(11, 16, 22, 0.95);
    --overlay-end: rgba(11, 16, 22, 0.7);
    --text-primary: #FFFFFF;
    --text-secondary: #E5E5EA;
    --panel-bg: rgba(255, 255, 255, 0.03);
    --panel-border: rgba(255, 255, 255, 0.08);
    --panel-shadow: rgba(0, 0, 0, 0.3);
    --input-bg: rgba(0, 0, 0, 0.2);
    --input-bg-focus: rgba(0, 0, 0, 0.4);
    --input-border: rgba(255, 255, 255, 0.1);
    --placeholder: rgba(255, 255, 255, 0.4);
    background-color: var(--bg);
}

.contact-banner.light-theme {
    --bg: #F7F5F1;
    --overlay-start: rgba(247, 245, 241, 0.96);
    --overlay-end: rgba(247, 245, 241, 0.75);
    --text-primary: #1A1D22;
    --text-secondary: #4A4E57;
    --panel-bg: rgba(255, 255, 255, 0.55);
    --panel-border: rgba(26, 29, 34, 0.08);
    --panel-shadow: rgba(26, 29, 34, 0.12);
    --input-bg: rgba(255, 255, 255, 0.7);
    --input-bg-focus: #FFFFFF;
    --input-border: rgba(26, 29, 34, 0.14);
    --placeholder: rgba(26, 29, 34, 0.4);
    background-color: var(--bg);
}

.contact-background {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-size: cover;
    background-position: center;
    z-index: 1;
}

.contact-overlay {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: linear-gradient(to right, var(--overlay-start) 0%, var(--overlay-end) 100%);
    z-index: 2;
}

.contact-banner-container {
    position: relative;
    z-index: 3;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
}

.contact-banner-content {
    flex: 1;
    max-width: 500px;
}

.contact-eyebrow {
    color: var(--gold);
    font-size: 0.85rem;
    letter-spacing: 0.08em;
    margin-bottom: 1rem;
    font-weight: 600;
}

.contact-title {
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    font-family: 'Playfair Display', Georgia, serif;
    color: var(--text-primary);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1.5rem;
}

.contact-description {
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 0 0 1.75rem;
    max-width: 46ch;
}

.contact-points {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
}

.contact-points li {
    color: var(--text-secondary);
    font-size: 0.95rem;
    padding-left: 1.1rem;
    position: relative;
}

.contact-points li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.5em;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--gold);
}

.contact-form-wrapper {
    flex: 1;
    max-width: 550px;
}

.glass-contact-form {
    background: var(--panel-bg);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--panel-border);
    border-radius: 16px;
    padding: 2.5rem;
    box-shadow: 0 20px 40px var(--panel-shadow);
}

.form-group {
    margin-bottom: 1.25rem;
    display: flex;
    flex-direction: column;
}

.form-group label {
    color: var(--text-secondary);
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
    font-weight: 500;
}

.form-row {
    display: flex;
    gap: 1.25rem;
}

.form-row .form-group {
    flex: 1;
}

.form-input {
    width: 100%;
    background: var(--input-bg);
    border: 1px solid var(--input-border);
    border-radius: 8px;
    padding: 0.9rem 1rem;
    color: var(--text-primary);
    font-size: 0.95rem;
    outline: none;
    transition: border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
}

.form-select {
    appearance: none;
    -webkit-appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23C49B55'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1rem;
    padding-right: 2.5rem;
}

.form-select option {
    color: #1A1D22;
    background: #FFFFFF;
}

.form-input::placeholder {
    color: var(--placeholder);
}

.form-input:focus {
    border-color: var(--gold);
    background: var(--input-bg-focus);
    box-shadow: 0 0 0 3px var(--gold-soft);
}

.form-input.has-error {
    border-color: #E2725B;
}

.field-error {
    color: #E2725B;
    font-size: 0.78rem;
    margin-top: 0.35rem;
}

.form-textarea {
    resize: none;
}

.form-status-error {
    color: #E2725B;
    font-size: 0.85rem;
    margin: -0.5rem 0 1rem;
}

.form-disclaimer {
    color: var(--placeholder);
    font-size: 0.75rem;
    line-height: 1.4;
    margin: 0.9rem 0 0;
    text-align: center;
}

.submit-btn {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.25rem;
    padding: 1.1rem;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    background: var(--gold);
    color: #14161A;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;
}

.submit-btn:hover:not(:disabled) {
    box-shadow: 0 8px 20px var(--gold-soft);
}

.submit-btn:active:not(:disabled) {
    transform: translateY(1px);
}

.submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.btn-arrow {
    margin-left: 8px;
    transition: transform 0.15s ease;
}

.submit-btn:hover:not(:disabled) .btn-arrow {
    transform: translateX(3px);
}

.form-success {
    text-align: center;
    padding: 3rem 2.5rem;
}

.form-success h3 {
    color: var(--text-primary);
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1.6rem;
    margin: 0 0 0.75rem;
}

.form-success p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0 0 1.5rem;
}

.text-btn {
    background: none;
    border: none;
    color: var(--gold);
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    padding: 0;
}

.text-btn:hover {
    text-decoration: underline;
}

.form-input:focus-visible,
.submit-btn:focus-visible,
.text-btn:focus-visible {
    outline: 2px solid var(--gold);
    outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
    .form-input, .submit-btn, .btn-arrow {
        transition: none;
    }
}

@media screen and (max-width: 968px) {
    .contact-banner-container {
        flex-direction: column;
        align-items: flex-start;
        gap: 3rem;
    }
    .contact-banner-content, .contact-form-wrapper {
        max-width: 100%;
        width: 100%;
    }
}

@media screen and (max-width: 600px) {
    .contact-banner {
        padding: 5rem 5% 3rem;
    }
    .form-row {
        flex-direction: column;
        gap: 0;
    }
    .glass-contact-form {
        padding: 1.5rem;
    }
}
`;
