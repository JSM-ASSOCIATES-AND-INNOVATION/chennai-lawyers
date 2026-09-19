import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, Linkedin, Twitter, Mail, ArrowLeft } from "lucide-react";
import './Team.css';
import { useTheme } from "../../Shared/ThemeContext/ThemeContext";

// 🚨 SMART RESOLVER: Ensures backend uploads render correctly
const resolveUrl = (url) => {
    if (!url) return "/placeholder.jpg"; // Fallback if no image
    if (url.startsWith("http") || url.startsWith("data:") || url.startsWith("blob:")) return url;
    const cleanPath = url.startsWith("/") ? url.substring(1) : url;
    return `http://localhost:5001/${cleanPath}`;
};

// --- FALLBACK DATA ---
const fallbackTeamData = [
    {
        _id: "1",
        name: "K Satish Kumar",
        designation: "Founder & Principal Advocate",
        category: "Board of Directors",
        bio: "K Satish Kumar LLB, CMA, Legal & Chief Data Protection Officer, is the visionary behind Chennai Lawyers. With over 20 years of experience, he is a Keynote Speaker, prominent author, and a highly respected legal professional.\n\nHe has authored numerous articles regarding legal issues in renowned magazines. He has received many awards, including the coveted “Legal Counsel of the Year - 2018” by INBA, and is featured in the “GC Power List India 2018” by Legal 500.\n\nHis active involvement in pro bono activities through Chennai Lawyers is highly appreciated by the general public and media.",
        image: "/praksh.png", // We'll use praksh.png or FirmImage.jpg as a placeholder
        linkedin: "#",
        twitter: "#",
        email: "contact@chennailawyers.net"
    },
    {
        _id: "2",
        name: "Senior Associate",
        designation: "Head of Litigation",
        category: "Partners",
        bio: "An aggressive litigator with extensive experience in the High Court of Madras, leading complex civil and criminal defense cases.",
        image: "/placeholder.jpg",
        linkedin: "#",
        email: "litigation@chennailawyers.net"
    },
    {
        _id: "3",
        name: "Corporate Counsel",
        designation: "Corporate & M&A",
        category: "Associates & Counsel",
        bio: "Specializes in cross-border M&A, data protection compliance, and corporate structuring for multinational entities operating in India.",
        image: "/placeholder.jpg",
        linkedin: "#",
        email: "corporate@chennailawyers.net"
    }
];

const categoryOrder = [
    "Board of Directors",
    "Partners",
    "Associates & Counsel",
    "Administration"
];

const Team = () => {
    const navigate = useNavigate();
    const { isDarkTheme } = useTheme();

    const [teamMembers, setTeamMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedMember, setSelectedMember] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchTeam = async () => {
            try {
                const response = await fetch('http://localhost:5001/api/team');
                if (response.ok) {
                    const data = await response.json();
                    setTeamMembers(data.length > 0 ? data : fallbackTeamData);
                } else {
                    setTeamMembers(fallbackTeamData);
                }
            } catch (error) {
                console.warn("Backend not connected yet. Using fallback data.");
                setTeamMembers(fallbackTeamData);
            } finally {
                setLoading(false);
            }
        };
        fetchTeam();
    }, []);

    useEffect(() => {
        if (selectedMember) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedMember]);

    const openSidebar = (member) => setSelectedMember(member);
    const closeSidebar = () => setSelectedMember(null);

    const groupedMembers = teamMembers.reduce((acc, member) => {
        const cat = member.category || "Other";
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(member);
        return acc;
    }, {});

    const sortedCategories = Object.keys(groupedMembers).sort((a, b) => {
        let indexA = categoryOrder.indexOf(a);
        let indexB = categoryOrder.indexOf(b);
        if (indexA === -1) indexA = 99;
        if (indexB === -1) indexB = 99;
        return indexA - indexB;
    });

    if (loading) {
        return (
            <div className={`team-page-container ${isDarkTheme ? 'dark-theme' : 'light-theme'} team-loading`}>
                <div className="loader-spinner"></div>
            </div>
        );
    }

    return (
        <div className={`team-page-container ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>

            {/* HERO HEADER */}
            <section className="team-hero-section">
                <div className="team-container">
                    <button className="team-back-btn" onClick={() => navigate("/")}>
                        <ArrowLeft size={18} />
                        Back to Home
                    </button>
                    <h4 className="team-eyebrow">OUR PEOPLE</h4>
                    <h1 className="team-title">The Minds Behind<br/>The Mission.</h1>
                    <div className="team-accent-line"></div>
                    <p className="team-subtitle">
                        A multidisciplinary collective of formidable litigators, corporate strategists, and industry experts dedicated to advancing your interests.
                    </p>
                </div>
            </section>

            {/* TEAM GRID */}
            <section className="team-content-section">
                <div className="team-container">
                    {sortedCategories.map((category) => (
                        <div key={category} className="team-category-block">
                            <h2 className="team-category-title">{category}</h2>
                            <div className="team-grid">
                                {groupedMembers[category].map((member) => (
                                    <div
                                        key={member._id || member.id}
                                        className="team-card"
                                        onClick={() => openSidebar(member)}
                                    >
                                        <div className="team-card-image-wrapper">
                                            <img src={resolveUrl(member.image)} alt={member.name} onError={(e) => { e.target.onerror = null; e.target.src = "/placeholder.jpg"; }} loading="lazy" />
                                            <div className="team-card-overlay">
                                                <span className="team-view-profile">View Profile</span>
                                            </div>
                                        </div>
                                        <div className="team-card-info">
                                            <h3 className="team-card-name">{member.name}</h3>
                                            <p className="team-card-role">{member.designation}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SIDEBAR DOSSIER */}
            <div className={`team-sidebar-overlay ${selectedMember ? 'active' : ''}`} onClick={closeSidebar}></div>
            <div className={`team-sidebar ${selectedMember ? 'open' : ''}`}>
                <button className="sidebar-close-btn" onClick={closeSidebar}>
                    <X size={24} strokeWidth={2} />
                </button>

                {selectedMember && (
                    <div className="sidebar-scroll-area">
                        <div className="sidebar-image-section">
                            <img src={resolveUrl(selectedMember.image)} alt={selectedMember.name} onError={(e) => { e.target.onerror = null; e.target.src = "/placeholder.jpg"; }} />
                        </div>
                        <div className="sidebar-content-section">
                            <span className="sidebar-category-badge">{selectedMember.category}</span>
                            <h2 className="sidebar-member-name">{selectedMember.name}</h2>
                            <p className="sidebar-member-role">{selectedMember.designation}</p>
                            
                            <div className="sidebar-separator"></div>
                            
                            <div className="sidebar-member-bio">
                                {selectedMember.bio ? selectedMember.bio.split('\n').map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                )) : <p>No professional biography provided.</p>}
                            </div>

                            <div className="sidebar-social-footer">
                                {selectedMember.linkedin && (
                                    <a href={selectedMember.linkedin} target="_blank" rel="noreferrer" className="sidebar-social-link">
                                        <Linkedin size={20} />
                                    </a>
                                )}
                                {selectedMember.twitter && (
                                    <a href={selectedMember.twitter} target="_blank" rel="noreferrer" className="sidebar-social-link">
                                        <Twitter size={20} />
                                    </a>
                                )}
                                {selectedMember.email && (
                                    <a href={`mailto:${selectedMember.email}`} className="sidebar-social-link">
                                        <Mail size={20} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Team;
