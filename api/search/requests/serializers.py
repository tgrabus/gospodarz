from rest_framework import serializers
from search.requests.data import SearchFarmerRequest

__author__ = 'tgrabus'


class SearchFarmerRequestSerializer(serializers.Serializer):
    x = serializers.FloatField()
    y = serializers.FloatField()
    product_ids = serializers.ListField(child=serializers.IntegerField(min_value=1, max_value=100))

    def create(self, validated_data):
        return SearchFarmerRequest(**validated_data)


class SearchFarmerResponseSerializer(serializers.Serializer):
    latitude = serializers.FloatField()
    longitude = serializers.FloatField()
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=100)
    distance = serializers.FloatField()