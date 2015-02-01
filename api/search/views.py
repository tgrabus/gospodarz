from rest_framework import viewsets
from rest_framework.response import Response
from search.models import City
from search.serializers import CitySerializer

__author__ = 'tgrabus'


class CityViewSet(viewsets.ViewSet):
    def list(self, request):
        cities = City.objects.all()
        serializer = CitySerializer(cities, many=True)
        return Response(serializer.data)

    def filter(self, request, name):
        cities = City.objects.filter(name__startswith=name)
        serializer = CitySerializer(cities, many=True)
        return Response(serializer.data)