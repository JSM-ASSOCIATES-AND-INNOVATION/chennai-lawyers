import React, { useEffect } from 'react';
import { useTheme } from "../../Shared/ThemeContext/ThemeContext";
import { Link } from 'react-router-dom';
import { 
    Briefcase, Scale, Building2, Users, 
    Gavel, ShieldCheck, HeartHandshake, Landmark, ArrowRight
} from 'lucide-react';
import './PracticeAreas.css';

const PracticeAreasPage = () => {
    const { isDarkTheme } = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const practices = [
        {
            title: "Civil Litigation",
            desc: "Expert representation in complex civil disputes, breach of contract, property disputes, and tort claims across all judicial forums.",
            icon: <Scale size={32} strokeWidth={1.5} />
        },
        {
            title: "Corporate Law",
            desc: "Comprehensive legal counsel for corporate structuring, mergers and acquisitions, joint ventures, and corporate governance.",
            icon: <Building2 size={32} strokeWidth={1.5} />
        },
        {
            title: "Property Law",
            desc: "Specialized services in real estate transactions, title due diligence, RERA compliance, and property dispute resolution.",
            icon: <Landmark size={32} strokeWidth={1.5} />
        },
        {
            title: "Dispute Resolution",
            desc: "Strategic arbitration and mediation services aimed at resolving commercial conflicts efficiently outside the traditional courtroom.",
            icon: <HeartHandshake size={32} strokeWidth={1.5} />
        },
        {
            title: "Regulatory & Compliance",
            desc: "Guiding businesses through India's complex regulatory landscape, ensuring full statutory compliance and risk mitigation.",
            icon: <ShieldCheck size={32} strokeWidth={1.5} />
        },
        {
            title: "Intellectual Property",
            desc: "Protecting your brand and innovations through trademark registration, patent filing, and aggressive IP infringement litigation.",
            icon: <Briefcase size={32} strokeWidth={1.5} />
        },
        {
            title: "Employment Law",
            desc: "Advising employers on labor law compliance, workplace policies, POSH regulations, and representing clients in labor tribunals.",
            icon: <Users size={32} strokeWidth={1.5} />
        },
        {
            title: "Taxation",
            desc: "Strategic tax planning and representation before tax tribunals for both direct (Income Tax) and indirect (GST) taxation matters.",
            icon: <Gavel size={32} strokeWidth={1.5} />
        }
    ];

    return (
        <div className={`practice-page ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            {/* HERO SECTION */}
            <section className="practice-hero">
                <div className="practice-hero-overlay"></div>
                <div className="practice-hero-content">
                    <h4 className="page-eyebrow">OUR EXPERTISE</h4>
                    <h1 className="page-title">Comprehensive Legal Solutions.</h1>
                    <p className="page-subtitle">
                        Delivering strategic, multidisciplinary counsel across all major sectors of law. We protect your interests with precision.
                    </p>
                </div>
            </section>

            {/* MAIN LISTINGS */}
            <section className="practice-listings-section">
                <div className="practice-page-container">
                    <div className="practice-listings-grid">
                        {practices.map((practice, index) => (
                            <div key={index} className="practice-detail-card">
                                <div className="practice-icon-wrapper">
                                    {practice.icon}
                                </div>
                                <h2>{practice.title}</h2>
                                <p>{practice.desc}</p>
                                <div className="practice-card-footer">
                                    <Link to="/contact" className="learn-more-link">
                                        CONSULT WITH US <ArrowRight size={16} style={{marginLeft: '4px'}}/>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PracticeAreasPage;
