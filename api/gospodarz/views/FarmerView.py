from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from gospodarz.models import Farmer
from gospodarz.serializers import FarmerSerializer

__author__ = 'tgrabus'


class FarmerList(APIView):

    def get(self, request):
        cities = Farmer.objects.all()
        serializer = FarmerSerializer(cities, many=True)
        return Response(serializer.data)

    def put(self, request):
        serializer = FarmerSerializer(data=request.DATA)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)