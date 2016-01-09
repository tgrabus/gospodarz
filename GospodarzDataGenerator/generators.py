import jsonpickle
from downloaders import Downloader
from models import DefaultParam

__author__ = 'tgrabus'


class Generator:
    def __init__(self):
        self.downloader = None
        self.items = []

    def set_downloader(self, downloader: Downloader):
        self.downloader = downloader

    def generate(self, param: DefaultParam):
        self.items = self.downloader.get(param)

    def save(self, target):
        with open(target, 'w', newline='', encoding='utf-8') as writerFile:
            jsonpickle.set_preferred_backend('simplejson')
            jsonpickle.set_encoder_options('simplejson', encoding='utf-8', ensure_ascii=False, indent=4)
            json_encoded = jsonpickle.encode(self.items, unpicklable=False)
            writerFile.write(json_encoded)