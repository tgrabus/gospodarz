from django.db import models


class Farmer(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class ProductCategory(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=100)
    picture = models.ImageField(null=True, blank=True, upload_to='products/original')
    product_category = models.ForeignKey(ProductCategory)

    def __str__(self):
        return self.name


class FarmerProduct(models.Model):
    name = models.CharField(max_length=100)
    farmer = models.ForeignKey(Farmer)
    product = models.ForeignKey(Product)
    picture = models.ImageField(null=True, blank=True, upload_to='products')

    def __str__(self):
        return self.name


class City(models.Model):
    name = models.CharField(max_length=50)
    positionX = models.FloatField()
    positionY = models.FloatField()
    sinXRad = models.FloatField(default=0)
    sinYRad = models.FloatField(default=0)
    cosXRad = models.FloatField(default=0)
    cosYRad = models.FloatField(default=0)

    def __str__(self):
        return self.name


class Localization(models.Model):
    latitude = models.FloatField()
    longitude = models.FloatField()
    sin_latitude = models.FloatField(default=0)
    sin_longitude = models.FloatField(default=0)
    cos_latitude = models.FloatField(default=0)
    cos_longitude = models.FloatField(default=0)
    farmer = models.ForeignKey(Farmer)