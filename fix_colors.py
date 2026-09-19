import os
import re

directory = "frontend/src"

def replace_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Replace specific colors with var(--accent-primary) or #C49B55
    content = re.sub(r'#FFBF00', '#C49B55', content, flags=re.IGNORECASE)
    content = re.sub(r'#CD0000', '#C49B55', content, flags=re.IGNORECASE)
    content = re.sub(r'#0A84FF', '#C49B55', content, flags=re.IGNORECASE)
    content = re.sub(r'#0066CC', '#C49B55', content, flags=re.IGNORECASE)

    # In global.css, make sure accent-primary is C49B55
    if 'global.css' in filepath:
        content = re.sub(r'--accent-primary:.*?;', '--accent-primary: #C49B55;', content)
        
    with open(filepath, 'w') as f:
        f.write(content)

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith((".css", ".js")):
            replace_in_file(os.path.join(root, file))

print("Colors unified to #C49B55.")
