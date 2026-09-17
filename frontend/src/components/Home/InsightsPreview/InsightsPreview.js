import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTheme } from "../../Shared/ThemeContext/ThemeContext";
import './InsightsPreview.css';

const InsightsPreview = () => {
    const { isDarkTheme } = useTheme();

    const mockInsights = [
        {
            category: "Legal Update",
            title: "Navigating the New Data Protection Act: What Corporations Need to Know",
            date: "October 12, 2026",
            link: "/blogs",
            image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800"
        },
        {
            category: "Firm News",
            title: "Chennai Lawyers Recognized Among Top Tier Regional Firms",
            date: "September 28, 2026",
            link: "/blogs",
            image: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&q=80&w=800"
        },
        {
            category: "Article",
            title: "The Evolution of Commercial Arbitration in India",
            date: "September 15, 2026",
            link: "/blogs",
            image: "https://images.unsplash.com/photo-1505664177941-be0a169dc2a8?auto=format&fit=crop&q=80&w=800"
        },
        {
            category: "Press Release",
            title: "JSM Associates Expands Corporate Practice with New Partners",
            date: "August 30, 2026",
            link: "/blogs",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <section className={`insights-section tlh-swiper-style ${isDarkTheme ? 'dark-theme' : 'light-theme'}`} id="insights">
            <div className="insights-container">
                
                <div className="insights-header-flex">
                    <div className="insights-header-left">
                        <h2 className="insights-title">News & Insights</h2>
                        <div className="insights-accent-line"></div>
                    </div>
                    <div className="insights-header-right">
                        <Link to="/blogs" className="apple-btn primary-btn glass-btn">
                            VIEW ALL <span style={{marginLeft: '8px'}}>→</span>
                        </Link>
                    </div>
                </div>

                <div className="insights-carousel-wrapper">
                    <div className="insights-carousel">
                        {mockInsights.map((insight, index) => (
                            <Link to={insight.link} key={index} className="insight-card glass-card">
                                <div className="insight-image-wrapper">
                                    <img src={insight.image} alt={insight.title} className="insight-image" />
                                    <div className="insight-category-badge">{insight.category}</div>
                                </div>
                                <div className="insight-content">
                                    <div className="insight-meta">
                                        <span className="insight-date">{insight.date}</span>
                                    </div>
                                    <h3 className="insight-card-title">{insight.title}</h3>
                                    
                                    <div className="insight-footer">
                                        <span className="read-more">Read More</span>
                                        <div className="insight-arrow">
                                            <ArrowRight size={20} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                </div>
                                <div className="insight-hover-border"></div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default InsightsPreview;
