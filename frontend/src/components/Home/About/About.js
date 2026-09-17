import React from 'react';
import { useTheme } from "../../Shared/ThemeContext/ThemeContext";

const STATS = [
    { number: '10+', label: 'Years of practice' },
    { number: '500+', label: 'Clients advised' },
    { number: '1000+', label: 'Matters handled' },
];

const About = () => {
    const { isDarkTheme } = useTheme();

    return (
        <section className={`about-section ${isDarkTheme ? 'dark-theme' : 'light-theme'}`} id="about">
            <style>{CSS}</style>

            <div className="about-container">
                <div className="about-content">
                    <h4 className="about-subtitle">About us</h4>
                    <h2 className="about-title">Rooted in Chennai.<br />Focused on results.</h2>
                    <p className="about-description">
                        With a commitment to legal excellence and client-centric solutions,
                        ChennaiLawyers.net brings together a team of experienced advocates and
                        legal professionals. We combine deep legal expertise with practical
                        insight to help our clients navigate complex legal challenges.
                    </p>

                    <a href="#our-firm" className="about-cta">
                        Our firm <span className="about-cta-arrow" aria-hidden="true">→</span>
                    </a>

                    <div className="about-stats">
                        {STATS.map((stat) => (
                            <div className="stat-item" key={stat.label}>
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="about-image-wrapper">
                    <img
                        className="about-image"
                        src={`${process.env.PUBLIC_URL}/intellectual-property.jpg`}
                        alt="Members of the ChennaiLawyers.net team in discussion"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="about-quote-overlay">
                        <p className="about-quote">
                            "Good lawyering is not just about knowing the law, but understanding people."
                        </p>
                        <div className="quote-divider" aria-hidden="true" />
                        <p className="quote-author">ChennaiLawyers.net</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

/* ---------------------------------------------
   Styles

   Self-contained on purpose: every class here is
   prefixed with "about-" (or is a one-off like
   .stat-item/.quote-divider that only appears in
   this section), so this component never depends
   on another section's <style> tag also being
   mounted on the page, and never overwrites theirs.
   The only things shared with the rest of the site
   are the CSS variables the app's ThemeContext
   already sets globally (--bg-main, --text-main, etc.)
   plus the brand gold, which is intentionally
   hardcoded consistently across every section.
--------------------------------------------- */
const CSS = `
.about-section {
    --gold: #C49B55;
    min-height: 100vh;
    scroll-snap-align: start;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 6rem 5%;
    display: flex;
    align-items: center;
    background-color: var(--bg-main);
    color: var(--text-main);
    transition: background-color var(--transition-speed, 0.3s) ease, color var(--transition-speed, 0.3s) ease;
}

.about-container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: stretch;
}

.about-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.about-subtitle {
    color: var(--gold);
    font-size: 0.85rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-weight: 600;
}

.about-title {
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    font-family: 'Playfair Display', Georgia, serif;
    color: var(--text-heading);
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.1;
    letter-spacing: -0.01em;
}

.about-description {
    color: var(--text-muted);
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    max-width: 52ch;
}

.about-cta {
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    margin-bottom: 3rem;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.03em;
    text-decoration: none;
    background-color: var(--gold);
    color: #14161A;
    border: 1px solid var(--gold);
    transition: background-color 0.2s ease, transform 0.15s ease;
}

.about-cta:hover {
    background-color: #A37E43;
    border-color: #A37E43;
}

.about-cta:active {
    transform: translateY(1px);
}

.about-cta:focus-visible {
    outline: 2px solid var(--gold);
    outline-offset: 2px;
}

.about-cta-arrow {
    margin-left: 8px;
    transition: transform 0.15s ease;
}

.about-cta:hover .about-cta-arrow {
    transform: translateX(3px);
}

.about-stats {
    display: flex;
    gap: 2.5rem;
    border-top: 1px solid var(--border-color);
    padding-top: 2rem;
}

.stat-item {
    display: flex;
    flex-direction: column;
}

.stat-number {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-heading);
    font-family: 'Playfair Display', Georgia, serif;
    line-height: 1;
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: 0.8rem;
    color: var(--text-muted);
    font-weight: 500;
}

.about-image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 3 / 4;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.about-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
}

.about-quote-overlay {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 62%;
    background: rgba(11, 13, 16, 0.72);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 2rem;
    border-top-left-radius: 12px;
}

.about-quote {
    color: #F5F5F7;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1.2rem;
    font-style: italic;
    line-height: 1.4;
    margin: 0 0 1.25rem;
}

.quote-divider {
    width: 30px;
    height: 2px;
    background-color: var(--gold);
    margin-bottom: 1rem;
}

.quote-author {
    color: var(--gold);
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0;
}

@media (prefers-reduced-motion: reduce) {
    .about-cta, .about-cta-arrow {
        transition: none;
    }
}

@media screen and (max-width: 968px) {
    .about-section {
        padding: 5rem 5%;
    }
    .about-container {
        grid-template-columns: 1fr;
    }
    .about-image-wrapper {
        aspect-ratio: 16 / 10;
    }
    .about-quote-overlay {
        width: 80%;
    }
}

@media screen and (max-width: 600px) {
    .about-stats {
        flex-direction: column;
        gap: 1.5rem;
    }
    .about-quote-overlay {
        width: 100%;
        border-top-left-radius: 0;
        padding: 1.5rem;
    }
}
`;
