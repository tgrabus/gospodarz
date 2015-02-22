from rest_framework import viewsets
from rest_framework.response import Response

from search.serializers import *


__author__ = 'tgrabus'


class Root(viewsets.ViewSet):
    pass


class CityViewSet(viewsets.ViewSet):
    def list(self, request):
        cities = City.objects.all()
        serializer = CitySerializer(cities, many=True)
        return Response(serializer.data)

    def filter(self, request, name):
        cities = City.objects.filter(name__startswith=name)
        serializer = CitySerializer(cities, many=True)
        return Response(serializer.data)


class ProductViewSet(viewsets.ViewSet):
    def list_by_category(self, request, category):
        products = Product.objects.filter(product_category_id=category).order_by('name')
        context = {'request': request}
        serializer = ProductSerializer(products, many=True, context=context)
        return Response(serializer.data)