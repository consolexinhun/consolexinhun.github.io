import os
import sys
import re

PATTERN = r"^\d{1,3}\."

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "docs"))

if __name__ == '__main__':
    for root, dirs, files in os.walk(ROOT):
        for dirpath in dirs:
            if dirpath.startswith('.') or dirpath.startswith('@') or root.__contains__('.vuepress'):
                continue
            files = sorted(os.listdir(os.path.join(root, dirpath)))
            for i, file in enumerate(files):
                if not re.match(PATTERN, file):
                    new_name = "{:03d}.{}".format(i, file)
                    os.rename(os.path.join(root, dirpath, file), os.path.join(root, dirpath, new_name))


