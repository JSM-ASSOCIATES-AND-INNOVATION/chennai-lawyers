import React from 'react';
import { useTheme } from "../../Shared/ThemeContext/ThemeContext";
import { Star, Award, ShieldCheck } from 'lucide-react';
import './Testimonials.css';

const awards = [
    {
        id: 1,
        title: "Top Global Legal Leader 2019",
        issuer: "Legal/IP Gorilla, Singapore",
        description: "Awarded for exceptional leadership in international law and IP protection."
    },
    {
        id: 2,
        title: "GC Powerlist India 2018",
        issuer: "Legal 500, UK",
        description: "Recognized among the most influential and innovative legal counsel in India."
    },
    {
        id: 3,
        title: "Legal Counsel of the Year 2018",
        issuer: "Indian National Bar Association",
        description: "Honored for outstanding contribution to the legal profession and client service."
    }
];

const googleReviews = [
    {
        id: 1,
        text: "Advocate Satish Kumar and the team handled our corporate compliance seamlessly. Their deep understanding of the law and proactive approach saved us immense time. Truly a 5-star experience.",
        author: "Prakash V.",
        role: "Corporate Client"
    },
    {
        id: 2,
        text: "Exceptional service! They guided me through a highly complex property dispute with professionalism and sharp legal acumen. I felt confident every step of the way.",
        author: "Meera Krishnan",
        role: "Private Client"
    },
    {
        id: 3,
        text: "Highly recommended for their transparency and dedication. The way they strategize and execute is commendable. One of the best law firms in Chennai.",
        author: "Rajan S.",
        role: "Business Owner"
    }
];

const AwardCard = ({ award }) => (
    <div className="award-glass-card">
        <div className="award-icon-header">
            <Award size={22} className="accent-icon" />
            <span className="award-issuer">{award.issuer}</span>
        </div>
        <h4 className="award-title">"{award.title}"</h4>
        <p className="award-desc">{award.description}</p>
    </div>
);

const ReviewCard = ({ review }) => (
    <div className="review-glass-card">
        <div className="review-google-header">
            <div className="google-badge">
                <span className="g-blue">G</span><span className="g-red">o</span><span className="g-yellow">o</span><span className="g-blue">g</span><span className="g-green">l</span><span className="g-red">e</span>
                <span className="google-review-text">Review</span>
            </div>
            <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#FBBC05" color="#FBBC05" />
                ))}
            </div>
        </div>
        <p className="review-text">"{review.text}"</p>
        <div className="review-author-info">
            <div className="author-avatar">{review.author.charAt(0)}</div>
            <div>
                <div className="author-name">{review.author}</div>
                <div className="author-role">
                    <ShieldCheck size={12} color="#34A853" style={{ marginRight: '4px' }} />
                    Verified {review.role}
                </div>
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
                        {/* Triple for longer screens */}
                        {awards.map((award) => (
                            <AwardCard key={`${award.id}-tri`} award={award} />
                        ))}
                    </div>
                </div>

                {/* Testimonials Header */}
                <div className="testimonials-header" style={{ marginTop: '2rem' }}>
                    <div className="testimonials-header-left">
                        <h4 className="testimonials-eyebrow">TESTIMONIALS</h4>
                        <h2 className="testimonials-title">Client Perspectives</h2>
                    </div>
                </div>

                {/* Testimonials Marquee */}
                <div className="marquee-container">
                    <div className="marquee-track track-2">
                        {googleReviews.map((review) => (
                            <ReviewCard key={review.id} review={review} />
                        ))}
                        {/* Duplicate for infinite scroll */}
                        {googleReviews.map((review) => (
                            <ReviewCard key={`${review.id}-dup`} review={review} />
                        ))}
                        {/* Triple for longer screens */}
                        {googleReviews.map((review) => (
                            <ReviewCard key={`${review.id}-tri`} review={review} />
                        ))}
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Testimonials;
