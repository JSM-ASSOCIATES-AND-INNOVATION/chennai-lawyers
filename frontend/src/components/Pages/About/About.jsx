import React, { useEffect } from 'react';
import { useTheme } from "../../Shared/ThemeContext/ThemeContext";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './About.css';

const AboutPage = () => {
    const { isDarkTheme } = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`about-page ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            
            {/* HERO SECTION */}
            <section className="about-hero">
                <div className="about-hero-overlay"></div>
                <div className="about-hero-content">
                    <h1 className="about-hero-title">A Legacy of <br/> Unyielding Advocacy.</h1>
                </div>
            </section>

            {/* MAIN ABOUT CONTENT */}
            <section className="about-main-section">
                <div className="about-container">
                    <div className="about-grid">
                        
                        {/* Left Side: Sticky Title */}
                        <div className="about-grid-left">
                            <div className="about-sticky-title">
                                <h4 className="about-eyebrow">OUR FIRM</h4>
                                <h2>Chennai Lawyers</h2>
                                <div className="about-accent-line"></div>
                            </div>
                        </div>

                        {/* Right Side: Justified Text Content */}
                        <div className="about-grid-right">
                            <p className="about-paragraph justified-text lead-paragraph">
                                Founded on the core principles of integrity, transparency, and relentless advocacy, Chennai Lawyers (Chennai Lawyers) has established itself as a premier full-service law firm in India. We represent a convergence of profound legal scholarship and aggressive litigation strategy, designed to secure decisive victories for our clients in an increasingly complex world.
                            </p>
                            
                            <p className="about-paragraph justified-text">
                                We believe that access to justice is a fundamental right. Our multidisciplinary team of seasoned advocates, consultants, and industry experts collaborate seamlessly to provide tailored, strategic legal solutions for individuals, corporations, and international entities. We do not just navigate the legal landscape; we actively shape it through rigorous preparation and innovative legal theories.
                            </p>
                            
                            <p className="about-paragraph justified-text">
                                Whether navigating complex commercial litigation, orchestrating cross-border corporate mergers, defending constitutional rights, or handling intricate family disputes, our approach remains resolutely the same. We take the time to deeply understand your unique objectives, ensuring every legal maneuver is precision-engineered for success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* AWARDS / RECOGNITIONS BANNER */}
            <section className="about-stats-section">
                <div className="about-container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h3>35+</h3>
                            <p>Years of Legacy</p>
                        </div>
                        <div className="stat-item">
                            <h3>Tier 1</h3>
                            <p>Firm Rankings</p>
                        </div>
                        <div className="stat-item">
                            <h3>10k+</h3>
                            <p>Resolutions</p>
                        </div>
                        <div className="stat-item">
                            <h3>50+</h3>
                            <p>Professionals</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE VALUES */}
            <section className="about-values-section">
                <div className="about-container">
                    <div className="about-grid">
                        <div className="about-grid-left">
                            <div className="about-sticky-title">
                                <h4 className="about-eyebrow">OUR ETHOS</h4>
                                <h2>Core Values</h2>
                                <div className="about-accent-line"></div>
                            </div>
                        </div>
                        
                        <div className="about-grid-right">
                            <div className="value-list">
                                <div className="value-item">
                                    <h3>Uncompromising Integrity</h3>
                                    <p className="justified-text">We uphold the highest ethical standards in every case, ensuring absolute transparency and honesty in all client communications. Our reputation is built on trust that is never taken for granted.</p>
                                </div>
                                <div className="value-item">
                                    <h3>Client-Centric Strategy</h3>
                                    <p className="justified-text">Every legal strategy is custom-tailored. We recognize that no two cases are identical, and we dedicate the necessary resources to thoroughly understand the nuances of your specific situation.</p>
                                </div>
                                <div className="value-item">
                                    <h3>Innovative Legal Solutions</h3>
                                    <p className="justified-text">The legal landscape is perpetually evolving. We leverage modern technology and progressive, forward-thinking legal theories to solve complex, novel challenges that traditional practices cannot.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="about-cta-section">
                <div className="about-container text-center">
                    <h2 className="cta-title">Partner with Excellence</h2>
                    <p className="cta-paragraph">
                        Our expert team is available to review your legal needs and provide immediate, actionable counsel.
                    </p>
                    <Link to="/contact" className="apple-btn primary-btn about-cta-btn">
                        CONTACT US TODAY
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
