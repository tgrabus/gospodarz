from rest_framework import viewsets
from rest_framework.response import Response

from gospodarz.models import City
from gospodarz.serializers import CitySerializer


class CityViewSet(viewsets.ViewSet):

    def list(self, request):
        cities = City.objects.all()
        serializer = CitySerializer(cities, many=True)
        return Response(serializer.data)

    def filter(self, request, name):
        cities = City.objects.filter(name__startswith=name)
        serializer = CitySerializer(cities, many=True)
        return Response(serializer.data)
