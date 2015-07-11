from collections import OrderedDict
from math import *
from rest_framework import viewsets
from rest_framework.response import Response
from search.requests.serializers import *
from search.responses.data import *
from search.responses.serializers import *

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


    def list(self, request):
        products = Product.objects.all()
        context = {'request': request}
        serializer = ProductSerializer(products, many=True, context=context)
        return Response(serializer.data)


class SearchViewSet(viewsets.ViewSet):
    def search_farmers(self, request):
        serializer = SearchFarmerSerializer(data=request.DATA)
        if serializer.is_valid():
            search_farmer_request = serializer.save()
            localizations = self.localize_nearest_farmers(search_farmer_request)
            farmers = self.map_to_farmer_geolocalizer(localizations)
            serializer = FarmerGeolocalizerSerializer(farmers, many=True)
            return Response(data=serializer.data)
        else:
            return Response()

    def localize_nearest_farmers(self, search_farmer_request):
        sin_latitude = sin(radians(search_farmer_request.x))
        cos_latitude = cos(radians(search_farmer_request.x))
        sin_longitude = sin(radians(search_farmer_request.y))
        cos_longitude = cos(radians(search_farmer_request.y))

        farmer_products_query = FarmerProduct.objects.filter(product_id__in=search_farmer_request.product_ids)

        localizations_query = Localization.objects \
            .extra(select=OrderedDict([('distance', '%s * sin_latitude + '
                                                    '%s * cos_latitude * '
                                                    '(sin_longitude * %s + '
                                                    'cos_longitude * %s)')]),
                   select_params=(sin_latitude, cos_latitude, sin_longitude, cos_longitude)) \
            .extra(where=['distance>%s'], params=[cos(200 / 6371.0)]) \
            .extra(order_by=['-distance'])

        localizations_query = localizations_query.filter(farmer_id__in=farmer_products_query.values_list('farmer_id', flat=True))
        localizations_query.select_related('farmer')
        return list(localizations_query)

    def map_to_farmer_geolocalizer(self, localizations):
        farmers = []
        for localization in localizations:
            localization.distance = 6371 * acos(localization.distance)
            farmers.append(FarmerGeolocalizer(
                localization.farmer.pk, localization.farmer.name,
                localization.latitude, localization.longitude,
                localization.distance))
        return farmers
