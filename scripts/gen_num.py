import os
import sys

if __name__ == '__main__':
    dirpath = sys.argv[1]
    files = sorted(os.listdir(dirpath))
    for i, file in enumerate(files):
        new_name = "{:03d}.{}".format(i, file)
        os.rename(os.path.join(dirpath, file), os.path.join(dirpath, new_name))


