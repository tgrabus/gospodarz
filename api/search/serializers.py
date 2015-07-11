from rest_framework import serializers

from search.models import *


class FarmerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Farmer
        fields = 'name'


class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = 'name'


class ProductSerializer(serializers.ModelSerializer):
    picture_url = serializers.SerializerMethodField()

    def get_picture_url(self, obj):
        return self.context['request'].build_absolute_uri(obj.picture.url)

    class Meta:
        model = Product
        fields = ('id', 'name', 'product_category', 'picture_url')


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ('name', 'positionX', 'positionY')
