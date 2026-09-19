import os
import re

directory = "frontend/src"

def replace_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Replace Gold with Red
    content = re.sub(r'#C49B55', '#CD0000', content, flags=re.IGNORECASE)
    content = re.sub(r'rgba\(\s*196\s*,\s*155\s*,\s*85\s*,', 'rgba(205, 0, 0,', content)

    with open(filepath, 'w') as f:
        f.write(content)

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith((".css", ".js")):
            replace_in_file(os.path.join(root, file))

print("Colors changed from Gold to Red.")
