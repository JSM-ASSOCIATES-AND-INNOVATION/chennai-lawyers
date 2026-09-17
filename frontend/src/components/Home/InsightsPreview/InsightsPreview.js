import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTheme } from "../../Shared/ThemeContext/ThemeContext";
import './InsightsPreview.css';

const InsightsPreview = () => {
    const { isDarkTheme } = useTheme();
    const scrollRef = useRef(null);

    const mockInsights = [
        {
            category: "Interview",
            title: "Exclusive Interview: The Future of Corporate Litigation and Dispute Resolution in India.",
            date: "Recent",
            link: "/blogs"
        },
        {
            category: "News",
            title: "Chennai Lawyers Expands Practice to Handle Complex International Arbitration Cases.",
            date: "Recent",
            link: "/blogs"
        },
        {
            category: "Blog",
            title: "Understanding the Implications of the New Digital Personal Data Protection Act.",
            date: "Ongoing",
            link: "/blogs"
        },
        {
            category: "Publication",
            title: "Authored numerous articles regarding complex legal issues in renowned national magazines.",
            date: "Ongoing",
            link: "/blogs"
        }
    ];

    // Mobile Auto-scroll logic
    useEffect(() => {
        const slider = scrollRef.current;
        if (!slider) return;

        let animationFrameId;
        let scrollPos = 0;
        
        const scroll = () => {
            if (window.innerWidth <= 768) {
                scrollPos += 0.5; // speed
                if (scrollPos >= slider.scrollHeight / 2) {
                    scrollPos = 0; // reset for infinite effect
                }
                slider.scrollTop = scrollPos;
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        // duplicate content for seamless loop on mobile
        if (window.innerWidth <= 768 && slider.children.length === mockInsights.length) {
            const children = Array.from(slider.children);
            children.forEach(child => {
                const clone = child.cloneNode(true);
                slider.appendChild(clone);
            });
        }

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && window.innerWidth <= 768) {
                    // Start at the top when scrolled into view
                    scrollPos = 0;
                    slider.scrollTop = 0;
                    animationFrameId = requestAnimationFrame(scroll);
                } else {
                    cancelAnimationFrame(animationFrameId);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
        observer.observe(slider);

        return () => {
            cancelAnimationFrame(animationFrameId);
            observer.disconnect();
        };
    }, [mockInsights.length]);

    return (
        <section className={`insights-section ${isDarkTheme ? 'dark-theme' : 'light-theme'}`} id="insights">
            <div className="insights-container">
                <div className="insights-layout">
                    
                    {/* Left Column */}
                    <div className="insights-left">
                        <div className="insights-sticky-content">
                            <h4 className="insights-eyebrow">NEWS & UPDATES</h4>
                            <h2 className="insights-title">Insights &<br/>Recognitions.</h2>
                            <div className="insights-accent-line"></div>
                            <p className="insights-description">
                                Stay informed with our latest legal updates, awards, and deep-dive articles authored by our experts.
                            </p>
                            <div className="insights-action-wrapper">
                                <Link to="/blogs" className="apple-btn primary-btn insights-btn">
                                    VIEW ALL UPDATES
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Cards */}
                    <div className="insights-right">
                        <div className="insights-card-list" ref={scrollRef}>
                            {mockInsights.map((insight, index) => (
                                <Link to={insight.link} key={index} className="insight-text-card">
                                    <div className="insight-card-header">
                                        <span className="insight-badge">{insight.category}</span>
                                        <span className="insight-date">{insight.date}</span>
                                    </div>
                                    <h3 className="insight-card-title">{insight.title}</h3>
                                    
                                    <div className="insight-card-footer">
                                        <span className="view-more-text">View More</span>
                                        <ArrowRight size={18} strokeWidth={2} className="view-more-arrow" />
                                    </div>
                                    
                                    {/* Hover effects */}
                                    <div className="insight-border-bg"></div>
                                    <div className="insight-border-active"></div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default InsightsPreview;
