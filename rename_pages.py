import os
import re
import shutil

directory = "frontend/src"

renames = {
    "AboutPage": "About",
    "AcademicSection": "Academic",
    "ContactPage": "Contact",
    "PracticeAreasPage": "PracticeAreas"
}

# First, rename the folders and files
pages_dir = os.path.join(directory, "components", "Pages")
for old_name, new_name in renames.items():
    old_path = os.path.join(pages_dir, old_name)
    new_path = os.path.join(pages_dir, new_name)
    if os.path.exists(old_path):
        os.rename(old_path, new_path)
        # Rename files inside
        for file in os.listdir(new_path):
            if file.startswith(old_name):
                new_file = file.replace(old_name, new_name)
                os.rename(os.path.join(new_path, file), os.path.join(new_path, new_file))

# Second, update imports globally in all .jsx and .js files
def update_imports(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    changed = False
    for old_name, new_name in renames.items():
        if old_name in content:
            content = content.replace(f"/{old_name}", f"/{new_name}")
            content = content.replace(f"{old_name}.css", f"{new_name}.css")
            content = content.replace(f"import {old_name} ", f"import {new_name} ")
            content = content.replace(f"<{old_name} ", f"<{new_name} ")
            content = content.replace(f"<{old_name}/", f"<{new_name}/")
            changed = True

    if changed:
        with open(filepath, 'w') as f:
            f.write(content)

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith((".jsx", ".js")):
            update_imports(os.path.join(root, file))

# Update Home.jsx to reflect OurPeople rename
home_file = os.path.join(directory, "components", "Home", "Home.jsx")
if os.path.exists(home_file):
    with open(home_file, 'r') as f:
        content = f.read()
    content = content.replace("Ourpeople", "OurPeople")
    with open(home_file, 'w') as f:
        f.write(content)

print("Renaming and import updates completed.")
