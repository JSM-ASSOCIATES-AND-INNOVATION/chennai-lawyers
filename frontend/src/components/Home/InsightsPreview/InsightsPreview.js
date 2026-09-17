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
        },
        {
            category: "Firm News",
            title: "ChennaiLawyers.net Recognized Among Top Tier Regional Firms",
            date: "September 28, 2026",
            link: "/blogs",
        },
        {
            category: "Article",
            title: "The Evolution of Commercial Arbitration in India",
            date: "September 15, 2026",
            link: "/blogs",
        }
    ];

    return (
        <section className={`insights-section tlh-style ${isDarkTheme ? 'dark-theme' : 'light-theme'}`} id="insights">
            <div className="insights-container tlh-container">
                <div className="tlh-layout">
                    
                    {/* Left Column (Sticky Header) */}
                    <div className="tlh-left">
                        <h2 className="tlh-title">News & Insights</h2>
                        <div className="tlh-accent-line"></div>
                        <p className="tlh-description">
                            Stay informed with our latest legal updates, firm news, and in-depth articles written by our expert legal minds.
                        </p>
                        
                        <div style={{ marginTop: '2rem' }}>
                            <Link to="/blogs" className="apple-btn primary-btn">
                                VIEW ALL <span style={{marginLeft: '8px'}}>→</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column (List of Links) */}
                    <div className="tlh-right">
                        {mockInsights.map((insight, index) => (
                            <Link to={insight.link} key={index} className="tlh-insight-link">
                                <div className="tlh-insight-content">
                                    <div className="tlh-insight-meta">
                                        <span className="tlh-category">{insight.category}</span>
                                        <span className="tlh-date">{insight.date}</span>
                                    </div>
                                    <h3 className="tlh-insight-title">{insight.title}</h3>
                                </div>
                                <div className="tlh-arrow-icon">
                                    <ArrowRight size={24} strokeWidth={1} />
                                </div>
                                <div className="tlh-link-border"></div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default InsightsPreview;
