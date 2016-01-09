import csv
import random
from helpers import convert_coord_to_float
from models import *
from math import *
import numbers
from decimal import Decimal

__author__ = 'tgrabus'


class Downloader:
    def __init__(self, pk):
        self.pk = pk

    def get(self, param: DefaultParam):
        pass

    def get_last_pk_number(self):
        return self.pk


class CityDownloader(Downloader):
    def get(self, param: DefaultParam):
        if not isinstance(param, SourceParam):
            return

        with open(param.file_path, newline='', encoding='utf-8') as readFile:
            reader = csv.reader(readFile, delimiter=';')
            cities = []
            for row in reader:
                x = Decimal(row[1])
                y = Decimal(row[2])
                aa = radians(x)
                sin_x_rad = sin(radians(x))
                cos_x_rad = cos(radians(x))
                sin_y_rad = sin(radians(y))
                cos_y_rad = cos(radians(y))
                fields = CityFields(row[0], row[1], row[2], sin_x_rad, sin_y_rad, cos_x_rad, cos_y_rad)
                city = City('search.City', self.pk, fields)
                self.pk += 1
                cities.append(city)

            return cities


class VegetableDownloader(Downloader):
    def get(self, param: DefaultParam):
        products = []
        vegetables = [
            'Bakłażan',
            'Bób',
            'Brokuł',
            'Brukiew',
            'Burak',
            'Cebula',
            'Cykoria',
            'Czosnek',
            'Dynia',
            'Fasola',
            'Groch',
            'Jarmuż',
            'Kalafior',
            'Kalarepa',
            'Kapusta',
            'Karczoch',
            'Koper',
            'Kukurydza',
            'Marchew',
            'Ogórek',
            'Papryka',
            'Pasternak',
            'Pietruszka',
            'Pomidor',
            'Por',
            'Roszponka',
            'Rzepa',
            'Rzeżucha',
            'Rzodkiew',
            'Rzodkiewka',
            'Salsefia',
            'Sałata',
            'Seler',
            'Skorzonera',
            'Szalotka',
            'Szczypiorek',
            'Szpinak'
        ]

        for vegetable in vegetables:
            fields = ProductFields(vegetable, ProductCategory.vegetable.value)
            product = Product('search.Product', self.pk, fields)
            self.pk += 1
            products.append(product)

        return products


class FruitDownloader(Downloader):
    def get(self, param: DefaultParam):
        products = []
        fruits = [
            'Agrest',
            'Ananas',
            'Arbuz',
            'Banan',
            'Borówka',
            'Brzoskwinia',
            'Cytryna',
            'Czereśnia',
            'Grejpfrut',
            'Gruszka',
            'Jabłko',
            'Jagoda',
            'Jeżyna',
            'Kokos',
            'Malina',
            'Mandarynka',
            'Melon',
            'Morela',
            'Pomarańcza',
            'Poziomka',
            'Porzeczka',
            'Renkloda',
            'Śliwka',
            'Truskawka',
            'Winogrono',
            'Wiśnia',
            'Żurawina'
        ]

        for fruit in fruits:
            fields = ProductFields(fruit, ProductCategory.fruit.value)
            product = Product('search.Product', self.pk, fields)
            self.pk += 1
            products.append(product)

        return products


class FarmerDownloader(Downloader):
    def get(self, param: DefaultParam):
        farmers = []

        for farmer_id in range(1, 20000):
            fields = FarmerFields('Farmer ' + str(farmer_id))
            farmer = Farmer('search.Farmer', farmer_id, fields)
            farmers.append(farmer)

        return farmers


class FarmerProductDownloader(Downloader):
    def get(self, param: DefaultParam):
        farmer_products = []

        for farmer_product_id in range(1, 100):
            farmer_id = random.randint(1, 19999)
            product_id = random.randint(1, 65)

            fields = FarmerProductFields('My product ' + str(farmer_product_id), None, farmer_id, product_id)
            farmer_product = FarmerProduct('search.FarmerProduct', farmer_product_id, fields)
            farmer_products.append(farmer_product)

            if farmer_product_id % 1000 == 0:
                print(farmer_product_id)

        return farmer_products


class FarmerProductDownloader(Downloader):
    def get(self, param: DefaultParam):
        farmer_products = []

        for farmer_product_id in range(1, 100):
            farmer_id = random.randint(1, 19999)
            product_id = random.randint(1, 65)

            fields = FarmerProductFields('My product ' + str(farmer_product_id), None, farmer_id, product_id)
            farmer_product = FarmerProduct('search.FarmerProduct', farmer_product_id, fields)
            farmer_products.append(farmer_product)

            if farmer_product_id % 1000 == 0:
                print(farmer_product_id)

        return farmer_products


class FarmerProductDownloader(Downloader):
    def get(self, param: DefaultParam):
        farmer_products = []

        for farmer_product_id in range(1, 10000):
            farmer_id = random.randint(1, 19999)
            product_id = random.randint(1, 65)

            fields = FarmerProductFields('My product ' + str(farmer_product_id), None, farmer_id, product_id)
            farmer_product = FarmerProduct('search.FarmerProduct', farmer_product_id, fields)
            farmer_products.append(farmer_product)

            if farmer_product_id % 1000 == 0:
                print(farmer_product_id)

        return farmer_products


class LocalizationDownloader(Downloader):
    def get(self, param: DefaultParam):
        localizations = []

        for localization_id in range(1, 1000):
            farmer_id = random.randint(1, 19999)
            city_id = random.randint(1, 692)

            pos_left = convert_coord_to_float(49, 00, 0)
            pos_right = convert_coord_to_float(54, 00, 0)
            pos_up = convert_coord_to_float(15, 00, 0)
            pos_down = convert_coord_to_float(24, 00, 0)
            pos_x = random.uniform(pos_left, pos_right)
            pos_y = random.uniform(pos_up, pos_down)
            sin_x_rad = sin(radians(pos_x))
            cos_x_rad = cos(radians(pos_x))
            sin_y_rad = sin(radians(pos_y))
            cos_y_rad = cos(radians(pos_y))

            fields = LocalizationFields(pos_x, pos_y, sin_x_rad, sin_y_rad, cos_x_rad, cos_y_rad, farmer_id, None)
            farmer_product = Localization('search.Localization', localization_id, fields)
            localizations.append(farmer_product)

            if localization_id % 1000 == 0:
                print(localization_id)

        return localizations