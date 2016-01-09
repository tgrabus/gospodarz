from enum import Enum

__author__ = 'tgrabus'


class DefaultParam:
    pass


class SourceParam(DefaultParam):
    def __init__(self, file_path):
        self.file_path = file_path


class CityFields:
    def __init__(self, name, position_x, position_y, sin_x_rad, sin_y_rad, cos_x_rad, cos_y_rad):
        self.name = name
        self.positionX = position_x
        self.positionY = position_y
        self.sinXRad = sin_x_rad
        self.sinYRad = sin_y_rad
        self.cosXRad = cos_x_rad
        self.cosYRad = cos_y_rad


class City:
    def __init__(self, model, pk, fields):
        self.model = model
        self.pk = pk
        self.fields = fields


class ProductFields:
    def __init__(self, name, product_category):
        self.name = name
        self.product_category = product_category


class Product:
    def __init__(self, model, pk, fields):
        self.model = model
        self.pk = pk
        self.fields = fields


class ProductCategory(Enum):
    fruit = 1
    vegetable = 2
    meat = 3
    dairy = 4


class Farmer:
    def __init__(self, model, pk, fields):
        self.model = model
        self.pk = pk
        self.fields = fields


class FarmerFields:
    def __init__(self, name):
        self.name = name


class FarmerProduct:
    def __init__(self, model, pk, fields):
        self.model = model
        self.pk = pk
        self.fields = fields


class FarmerProductFields:
    def __init__(self, name, picture, farmer_id, product_id):
        self.name = name
        self.picture = picture
        self.farmer = farmer_id
        self.product = product_id


class Localization:
    def __init__(self, model, pk, fields):
        self.model = model
        self.pk = pk
        self.fields = fields


class LocalizationFields:
    def __init__(self, position_x, position_y, sin_x_rad, sin_y_rad, cos_x_rad, cos_y_rad, farmer_id, city_id):
        self.positionX = position_x
        self.positionY = position_y
        self.sinXRad = sin_x_rad
        self.sinYRad = sin_y_rad
        self.cosXRad = cos_x_rad
        self.cosYRad = cos_y_rad
        self.farmer = farmer_id
        self.city = city_id