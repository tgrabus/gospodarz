__author__ = 'tgrabus'


class SearchFarmerRequest(object):
    def __init__(self, x, y, product_ids):
        self.x = x
        self.y = y
        self.product_ids = product_ids


class SearchFarmerResponse(object):
    def __init__(self, id, name, latitude, longitude, distance):
        self.id = id
        self.name = name
        self.latitude = latitude
        self.longitude = longitude
        self.distance = distance