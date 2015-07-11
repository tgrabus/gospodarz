from rest_framework import serializers
from search.requests.data import SearchFarmer

__author__ = 'tgrabus'


class SearchFarmerSerializer(serializers.Serializer):
    x = serializers.FloatField()
    y = serializers.FloatField()
    product_ids = serializers.ListField(child=serializers.IntegerField(min_value=1, max_value=100))

    def create(self, validated_data):
        return SearchFarmer(**validated_data)