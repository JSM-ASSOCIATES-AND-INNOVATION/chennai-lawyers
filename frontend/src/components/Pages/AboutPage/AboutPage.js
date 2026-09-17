import React, { useEffect } from 'react';
import { useTheme } from "../../Shared/ThemeContext/ThemeContext";
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Shield, Users, Landmark } from 'lucide-react';
import './AboutPage.css';

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
                    <h4 className="page-eyebrow">ABOUT OUR FIRM</h4>
                    <h1 className="page-title">Justice. Access. Community.</h1>
                    <p className="page-subtitle">
                        A legacy of legal excellence and unwavering commitment to securing justice for our clients across India.
                    </p>
                </div>
            </section>

            {/* MISSION & VISION */}
            <section className="about-mission-section">
                <div className="about-page-container">
                    <div className="mission-grid">
                        <div className="mission-text-content">
                            <h2 className="section-title">Our Heritage & Mission</h2>
                            <p className="section-paragraph">
                                Founded on the principles of integrity, transparency, and relentless advocacy, JSM Associates & Innovation has grown from a boutique practice into a premier full-service law firm based in Chennai, India. 
                            </p>
                            <p className="section-paragraph">
                                We believe that access to justice is a fundamental right. Our multidisciplinary team of seasoned advocates, consultants, and industry experts collaborate seamlessly to provide tailored, strategic legal solutions for individuals, corporations, and international entities.
                            </p>
                            <p className="section-paragraph">
                                Whether navigating complex commercial litigation, orchestrating cross-border corporate mergers, or defending constitutional rights, our approach remains the same: meticulous preparation, aggressive representation, and an unwavering focus on our clients' success.
                            </p>
                        </div>
                        <div className="mission-stats-grid">
                            <div className="stat-card-premium">
                                <Landmark className="stat-icon" size={32} />
                                <h3>35+</h3>
                                <p>Years of Combined Legacy</p>
                            </div>
                            <div className="stat-card-premium">
                                <Users className="stat-icon" size={32} />
                                <h3>50+</h3>
                                <p>Dedicated Legal Professionals</p>
                            </div>
                            <div className="stat-card-premium">
                                <Shield className="stat-icon" size={32} />
                                <h3>10k+</h3>
                                <p>Successful Resolutions</p>
                            </div>
                            <div className="stat-card-premium">
                                <Award className="stat-icon" size={32} />
                                <h3>Tier 1</h3>
                                <p>Firm Rankings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE VALUES */}
            <section className="about-values-section">
                <div className="about-page-container">
                    <h2 className="section-title text-center">Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <h4>Uncompromising Integrity</h4>
                            <p>We uphold the highest ethical standards in every case, ensuring transparency and honesty in all client communications.</p>
                        </div>
                        <div className="value-card">
                            <h4>Client-Centric Approach</h4>
                            <p>Every legal strategy is custom-tailored. We take the time to deeply understand your unique business objectives and personal goals.</p>
                        </div>
                        <div className="value-card">
                            <h4>Innovative Solutions</h4>
                            <p>The legal landscape is evolving. We leverage modern technology and progressive legal theories to solve complex, novel challenges.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="about-cta-section">
                <div className="about-page-container text-center">
                    <h2 className="section-title">Ready to Discuss Your Case?</h2>
                    <p className="section-paragraph center-para">
                        Our team is available to review your legal needs and provide immediate, actionable counsel.
                    </p>
                    <Link to="/contact" className="apple-btn primary-btn" style={{ margin: '2rem auto 0' }}>
                        CONTACT US TODAY <ArrowRight size={18} style={{marginLeft: '8px'}}/>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
