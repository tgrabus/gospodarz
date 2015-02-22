from rest_framework import viewsets
from rest_framework.response import Response
from account.serializers import FarmerProductSerializer

from search.serializers import *


class FarmerProductViewSet(viewsets.ViewSet):

    def list(self, request, farmer):
        products = FarmerProduct.objects.filter(farmer_id=farmer).order_by('name')
        context = {'request': request}
        serializer = FarmerProductSerializer(products, many=True, context=context)
        return Response(serializer.data)

    def list_by_category(self, request, farmer, category):
        farmer_products = FarmerProduct.objects.filter(farmer_id=farmer).filter(product__product_category_id=category).order_by('name')
        context = {'request': request}
        serializer = FarmerProductSerializer(farmer_products, many=True, context=context)
        return Response(serializer.data)
