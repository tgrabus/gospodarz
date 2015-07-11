__author__ = 'tgrabus'


class FarmerGeolocalizer(object):
    def __init__(self, id, name, latitude, longitude, distance):
        self.id = id
        self.name = name
        self.latitude = latitude
        self.longitude = longitude
        self.distance = distance