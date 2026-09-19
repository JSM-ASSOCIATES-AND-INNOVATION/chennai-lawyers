import os
import re

directory = "frontend/src"

def replace_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Replace specific rgba colors with #C49B55 rgba(196, 155, 85, X)
    content = re.sub(r'rgba\(\s*255\s*,\s*191\s*,\s*0\s*,', 'rgba(196, 155, 85,', content)
    content = re.sub(r'rgba\(\s*205\s*,\s*0\s*,\s*0\s*,', 'rgba(196, 155, 85,', content)

    with open(filepath, 'w') as f:
        f.write(content)

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith(".css"):
            replace_in_file(os.path.join(root, file))

print("RGBA Colors unified.")
