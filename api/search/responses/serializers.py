from rest_framework import serializers

__author__ = 'tgrabus'


class FarmerGeolocalizerSerializer(serializers.Serializer):
    latitude = serializers.FloatField()
    longitude = serializers.FloatField()
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=100)
    distance = serializers.FloatField()