from rest_framework import serializers
from rest_framework.relations import SlugRelatedField

from search.models import FarmerProduct


__author__ = 'tgrabus'


class FarmerProductSerializer(serializers.ModelSerializer):
    picture_url = serializers.SerializerMethodField('get_picture_url')
    product = SlugRelatedField(slug_field='name', read_only=True)

    def get_picture_url(self, obj):
        if obj.picture:
            return self.context['request'].build_absolute_uri(obj.picture.url)
        else:
            return self.context['request'].build_absolute_uri(obj.product.picture.url)

    class Meta:
        model = FarmerProduct
        fields = ('name', 'product', 'picture_url')