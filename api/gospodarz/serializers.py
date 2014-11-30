from gospodarz.models import *
from rest_framework import serializers


class FarmerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Farmer
        fields = ('name', 'positionX', 'positionY')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name', 'kind')


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('name', 'farmer', 'category')


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ('name', 'positionX', 'positionY')
