import re

with open("frontend/src/components/Navbar/Navbar.css", "r") as f:
    content = f.read()

# Remove the broken syntax area
pattern = re.compile(r'/\* =========================================\n   MOBILE MENU \(Slide Down\)\n   =========================================\n\*/\n\.mobile-toggle \{\n    display: none;\n\}\n\n    background: none;.*?\}\n\n    height: 1px;.*?\}\n\n\.navbar\.dark-theme \.highlight-btn \{', re.DOTALL)
fixed = pattern.sub(r'/* MOBILE TOGGLE */\n.mobile-toggle {\n    display: none;\n}\n\n.navbar.dark-theme .highlight-btn {', content)

with open("frontend/src/components/Navbar/Navbar.css", "w") as f:
    f.write(fixed)
