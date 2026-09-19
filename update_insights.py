import re

with open("frontend/src/components/Home/InsightsPreview/InsightsPreview.js", "r") as f:
    content = f.read()

replacement = """    const mockInsights = [
        {
            category: "News",
            title: "Chennai Lawyers Expands International Arbitration Practice.",
            date: "Recent",
            link: "/blogs"
        },
        {
            category: "Insights",
            title: "Digital Personal Data Protection Act: Corporate Compliance.",
            date: "Trending",
            link: "/blogs"
        },
        {
            category: "Publications",
            title: "Navigating High-Stakes Commercial Litigation in India.",
            date: "Ongoing",
            link: "/blogs"
        }
    ];"""

content = re.sub(r'    const mockInsights = \[.*?\];', replacement, content, flags=re.DOTALL)

with open("frontend/src/components/Home/InsightsPreview/InsightsPreview.js", "w") as f:
    f.write(content)
