from django.db import models


class Farmer(models.Model):
    name = models.CharField(max_length=100)
    positionX = models.FloatField(null=True, blank=True)
    positionY = models.FloatField(null=True, blank=True)


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