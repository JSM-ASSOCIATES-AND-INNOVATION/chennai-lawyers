import React from 'react';
import { useTheme } from "../../Shared/ThemeContext/ThemeContext";
import { Star, Award } from 'lucide-react';
import './Testimonials.css';

const awards = [
    {
        id: 1,
        title: "Legal Counsel of the Year - 2018",
        issuer: "Indian National Bar Association (INBA)",
        description: "Awarded for exceptional contribution to the legal profession and outstanding client service."
    },
    {
        id: 2,
        title: "Excellence in Corporate Law",
        issuer: "National Legal Awards",
        description: "Recognized for handling complex corporate structuring and high-stakes negotiations."
    },
    {
        id: 3,
        title: "Leading Dispute Resolution Firm",
        issuer: "Legal Era Recognitions",
        description: "Honored for maintaining a pristine track record in complex commercial litigation."
    },
    {
        id: 4,
        title: "Top Intellectual Property Counsel",
        issuer: "IP Rights Federation",
        description: "Awarded for protecting multi-million dollar corporate assets and innovations."
    }
];

const row1Reviews = [
    {
        id: 1,
        text: "After months of stalled negotiations, the team at JSM Associates secured a highly favorable settlement for our corporate dispute.",
        author: "Priya M.",
        role: "Founder of NextGen Solutions"
    },
    {
        id: 2,
        text: "Their expert legal counsel during our merger was invaluable. Truly a top-tier law firm with exceptional attention to detail.",
        author: "Abhishek T.",
        role: "CEO of FashionVibes India"
    },
    {
        id: 3,
        text: "JSM's swift action in our intellectual property case saved us millions. Their litigators are sharp and deeply dedicated.",
        author: "David H.",
        role: "Tech Innovators Inc."
    },
    {
        id: 4,
        text: "They transformed a complex regulatory compliance issue into a clear, manageable process. Highly recommended!",
        author: "Anjali P.",
        role: "Director at Wanderland"
    }
];

const AwardCard = ({ award }) => (
    <div className="review-card award-card">
        <div className="award-icon-wrapper">
            <Award size={24} color="#C49B55" />
        </div>
        <p className="award-title">"{award.title}"</p>
        <p className="award-desc">{award.description}</p>
        <div className="review-author-box">
            <div className="author-details">
                <span className="author-name">{award.issuer}</span>
            </div>
        </div>
    </div>
);

const ReviewCard = ({ review }) => (
    <div className="review-card">
        <div className="review-stars">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#C49B55" color="#C49B55" />
            ))}
        </div>
        <p className="review-text">"{review.text}"</p>
        <div className="review-author-box">
            <div className="author-details">
                <span className="author-name">{review.author}</span>
                <span className="author-role">{review.role}</span>
            </div>
        </div>
    </div>
);

const Testimonials = () => {
    const { isDarkTheme } = useTheme();

    return (
        <section className={`testimonials-section ${isDarkTheme ? 'dark-theme' : 'light-theme'}`} id="testimonials">
            <div className="testimonials-container">
                
                {/* Awards Header */}
                <div className="testimonials-header">
                    <div className="testimonials-header-left">
                        <h4 className="testimonials-eyebrow">AWARDS & RECOGNITION</h4>
                        <h2 className="testimonials-title">Excellence in Legal Practice</h2>
                    </div>
                </div>

                {/* Awards Marquee */}
                <div className="marquee-container">
                    <div className="marquee-track track-1">
                        {awards.map((award) => (
                            <AwardCard key={award.id} award={award} />
                        ))}
                        {/* Duplicate for infinite scroll */}
                        {awards.map((award) => (
                            <AwardCard key={`${award.id}-dup`} award={award} />
                        ))}
                    </div>
                </div>

                {/* Testimonials Header */}
                <div className="testimonials-header" style={{ marginTop: '1rem' }}>
                    <div className="testimonials-header-left">
                        <h4 className="testimonials-eyebrow">TESTIMONIALS</h4>
                        <h2 className="testimonials-title">Client Perspectives</h2>
                    </div>
                </div>

                {/* Testimonials Marquee */}
                <div className="marquee-container">
                    <div className="marquee-track track-2">
                        {row1Reviews.map((review) => (
                            <ReviewCard key={review.id} review={review} />
                        ))}
                        {/* Duplicate for infinite scroll */}
                        {row1Reviews.map((review) => (
                            <ReviewCard key={`${review.id}-dup`} review={review} />
                        ))}
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Testimonials;