from downloaders import *
from generators import *

__author__ = 'tgrabus'

product_generator = Generator()

downloader = CityDownloader(pk=1)
product_generator.set_downloader(downloader)
product_generator.generate(SourceParam('cities.csv'))
product_generator.save('Cities.json')

downloader = VegetableDownloader(pk=1)
product_generator.set_downloader(downloader)
product_generator.generate(DefaultParam())
product_generator.save('Vegetables.json')

downloader = FruitDownloader(pk=downloader.get_last_pk_number() + 1)
product_generator.set_downloader(downloader)
product_generator.generate(DefaultParam())
product_generator.save('Fruits.json')

downloader = FarmerDownloader(pk=1)
product_generator.set_downloader(downloader)
product_generator.generate(DefaultParam())
product_generator.save('Farmers.json')

downloader = FarmerProductDownloader(pk=1)
product_generator.set_downloader(downloader)
product_generator.generate(DefaultParam())
product_generator.save('FarmerProducts.json')

downloader = LocalizationDownloader(pk=1)
product_generator.set_downloader(downloader)
product_generator.generate(DefaultParam())
product_generator.save('Localizations.json')