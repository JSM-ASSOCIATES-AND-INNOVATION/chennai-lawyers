import os
import re

css_additions = {
    "frontend/src/styles/global.css": """
/* SNAP SCROLLING */
.snap-container {
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-x: hidden;
}

.snap-container > section {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
}

/* Ensure child containers don't overflow */
.snap-container > section > div {
    max-height: 100vh;
    overflow-y: auto;
    scrollbar-width: none; /* Firefox */
}
.snap-container > section > div::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
}
""",
    "frontend/src/components/Home/PracticeAreas/PracticeAreas.css": """
.practice-section.liquid-glass-style {
    padding: 0;
    align-items: center;
}
.practice-container {
    padding-top: 80px; /* navbar offset */
}
""",
    "frontend/src/components/Home/InsightsPreview/InsightsPreview.css": """
.insights-section {
    padding: 0;
}
.insights-container {
    padding-top: 80px;
}
""",
    "frontend/src/components/Home/Testimonials/Testimonials.css": """
.testimonials-section {
    padding: 0;
}
.testimonials-container {
    padding-top: 80px;
}
""",
    "frontend/src/components/Home/ContactForm/ContactForm.css": """
.contact-section {
    padding: 0;
}
.contact-container {
    padding-top: 80px;
}
"""
}

for file_path, addition in css_additions.items():
    with open(file_path, 'a') as f:
        f.write(addition)

print("Added snap container CSS and adjusted padding for sections.")
