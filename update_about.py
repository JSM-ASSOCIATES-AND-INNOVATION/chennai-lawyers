import re

with open("frontend/src/components/Home/About/About.css", "r") as f:
    content = f.read()

replacement = """@media (max-width: 992px) {
    .about-section {
        height: 100vh;
        min-height: 100vh;
        padding: 80px 0 0 0; /* space for navbar */
    }
    .about-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
}

@media (max-width: 768px) {
    .about-section {
        height: 100vh;
        min-height: 100vh;
        padding: 70px 0 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .about-grid {
        gap: 0.5rem;
    }
    .glass-panel {
        padding: 1rem;
    }
    .about-title {
        font-size: 1.8rem;
        margin-bottom: 0.5rem;
    }
    .about-description {
        font-size: 0.85rem;
        line-height: 1.4;
        margin-bottom: 0.5rem;
    }
    .about-image-container {
        height: 120px;
    }
    .about-quote-box {
        padding: 0.5rem;
        bottom: 0.5rem;
        left: 0.5rem;
        right: 0.5rem;
    }
    .about-quote {
        font-size: 0.8rem;
        margin-bottom: 0.2rem;
    }
    .about-stats-container {
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
    }
    .stat-glass-card {
        padding: 0.5rem;
    }
    .stat-number {
        font-size: 1.2rem;
    }
    .stat-label {
        font-size: 0.6rem;
    }
    .about-action-wrapper {
        margin-top: 0.5rem;
    }
    .about-eyebrow {
        margin-bottom: 0.5rem;
    }
    .about-accent-line {
        margin-bottom: 0.5rem;
    }
}"""

content = re.sub(r'@media \(max-width: 992px\).*', replacement, content, flags=re.DOTALL)

with open("frontend/src/components/Home/About/About.css", "w") as f:
    f.write(content)
