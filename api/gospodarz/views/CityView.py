from rest_framework.response import Response
from rest_framework.views import APIView

from gospodarz.models import City
from gospodarz.serializers import CitySerializer


class CityList(APIView):
    """
    All cities
    """

    def get(self, request):
        """
        Get all cities
        :return: list of cities
        """
        cities = City.objects.all()
        serializer = CitySerializer(cities, many=True)
        return Response(serializer.data)


class CitySubList(APIView):
    """
    Filter cities
    """

    def get(self, request, name):
        """
        Get cities which names start with name
        :param name: pattern
        :return: list of cities
        """
        cities = City.objects.filter(name__startswith=name)
        serializer = CitySerializer(cities, many=True)
        return Response(serializer.data)
