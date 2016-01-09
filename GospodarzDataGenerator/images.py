from PIL import Image

__author__ = 'tgrabus'

import os

path = "C:/Users/Tomek/Desktop/Produkty"

file_list = os.listdir(path)

for file in file_list:

    im1 = Image.open(path + '/' + file)
    width = 100
    height = 89
    im5 = im1.resize((width, height), Image.ANTIALIAS)
    ext = ".jpg"
    im5.save(path + '/' + file)