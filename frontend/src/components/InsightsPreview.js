import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from './ThemeContext';
import '../styles/InsightsPreview.css';

const InsightsPreview = () => {
    const { isDarkTheme } = useTheme();

    const articles = [
        {
            date: "12 AUG 2023",
            title: "Understanding the New Criminal Law Amendments",
            excerpt: "A practical analysis of the recent amendments and their impact on legal practice in India."
        },
        {
            date: "05 AUG 2023",
            title: "The Role of Technology in Modern Legal Practice",
            excerpt: "How technology is reshaping the legal profession and improving access to justice."
        },
        {
            date: "28 JUL 2023",
            title: "Legal Awareness: Rights Every Citizen Should Know",
            excerpt: "A guide to fundamental legal rights and remedies for everyday situations."
        }
    ];

    return (
        <section className={`insights-section ${isDarkTheme ? 'dark-theme' : 'light-theme'}`} id="insights">
            <div className="insights-container">
                
                <div className="insights-header">
                    <div className="insights-header-left">
                        <h4 className="insights-eyebrow">INSIGHTS & UPDATES</h4>
                        <h2 className="insights-title">Articles, Updates & Perspectives</h2>
                    </div>
                    <div className="insights-header-right">
                        <a href="#all-articles" className="view-all-link">
                            VIEW ALL ARTICLES <span style={{marginLeft: '4px'}}>→</span>
                        </a>
                    </div>
                </div>

                <div className="insights-grid">
                    {articles.map((article, index) => (
                        <div key={index} className="insight-card">
                            <span className="insight-date">{article.date}</span>
                            <h3 className="insight-title">{article.title}</h3>
                            <p className="insight-excerpt">{article.excerpt}</p>
                            <a href="#read-more" className="insight-read-more">
                                Read More <span style={{marginLeft: '4px'}}>→</span>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Mobile-only View All Button */}
                <div className="insights-mobile-action" style={{ display: 'none', marginTop: '1.5rem' }}>
                    <Link to="/blogs" className="apple-btn primary-btn" style={{ width: '100%', justifyContent: 'center' }}>
                        VIEW ALL ARTICLES <ArrowRight size={16} style={{marginLeft: '8px'}} />
                    </Link>
                </div>
                
            </div>
        </section>
    );
};

export default InsightsPreview;
