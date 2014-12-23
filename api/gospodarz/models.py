from django.db import models


class Farmer(models.Model):
    name = models.CharField(max_length=100)


class Category(models.Model):
    name = models.CharField(max_length=100)
    kind = models.IntegerField()


class Product(models.Model):
    name = models.CharField(max_length=100)
    farmer = models.ForeignKey(Farmer)
    category = models.ForeignKey(Category)


class City(models.Model):
    name = models.CharField(max_length=50)
    positionX = models.FloatField()
    positionY = models.FloatField()


class Localization(models.Model):
    positionX = models.FloatField()
    positionY = models.FloatField()
    farmer = models.ForeignKey(Farmer)
    street = models.CharField(max_length=100, null=True, blank=True)
    city = models.ForeignKey(City, null=True, blank=True)