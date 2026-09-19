import re

with open("frontend/public/index.html", "r") as f:
    content = f.read()

# Replace b_1.png with JSM_Logo.png
content = content.replace("b_1.png", "JSM_Logo.png")

# Replace JSM Associates & Innovations | Law Firm with Chennai Lawyers | Advocate Satish Kumar
content = re.sub(r'<title>.*?</title>', '<title>Chennai Lawyers | Advocate Satish Kumar</title>', content)

# Replace description
desc = "Chennai Lawyers - Advocate Satish Kumar. Strategic Legal Excellence with Mastery and Integrity. Serving the Madras High Court and Corporate Clients Nationwide."
content = re.sub(r'content="JSM Associates & Innovations - Strategic Legal Excellence.*?"', f'content="{desc}"', content)

with open("frontend/public/index.html", "w") as f:
    f.write(content)
