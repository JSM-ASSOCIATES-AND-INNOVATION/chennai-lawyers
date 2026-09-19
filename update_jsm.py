import os

directory = "frontend/src"

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith(".js"):
            path = os.path.join(root, file)
            with open(path, "r") as f:
                content = f.read()
            if "JSM Associates" in content:
                content = content.replace("JSM Associates & Innovation", "Chennai Lawyers")
                content = content.replace("JSM Associates", "Chennai Lawyers")
                with open(path, "w") as f:
                    f.write(content)

print("Renamed JSM Associates to Chennai Lawyers in JS files.")
