from search.models import *
from rest_framework import serializers


class FarmerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Farmer
        fields = 'name'


class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = 'name'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('name', 'picture', 'product_category')


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ('name', 'positionX', 'positionY')
