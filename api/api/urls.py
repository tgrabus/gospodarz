from django.conf.urls import url, include
from django.conf.urls.static import static
from rest_framework.urlpatterns import format_suffix_patterns
from account.views import FarmerProductViewSet
from api import settings
from search.views import *
from django.contrib import admin


city_list = CityViewSet.as_view({'get': 'list'})
city_filter_list = CityViewSet.as_view({'get': 'filter'})
root = Root.as_view()
list_farmer_products_by_category = FarmerProductViewSet.as_view({'get': 'list_by_category'})
list_farmer_products = FarmerProductViewSet.as_view({'get': 'list'})

list_products_by_category = ProductViewSet.as_view({'get': 'list_by_category'})

urlpatterns = format_suffix_patterns([

    url('^$', root, name='root-url'),

    url(r'^admin/', include(admin.site.urls)),

    url(r'^cities/$', city_list, name='city-list'),
    url(r'^cities/filter/(?P<name>\w+)/$', city_filter_list, name='city-filter-list'),

    url(r'^products/categories/(?P<category>\d+)/$', list_products_by_category, name='list-products-by-category'),

    url(r'^farmers/(?P<farmer>\d+)/products/$', list_farmer_products, name='list-farmer-products'),
    url(r'^farmers/(?P<farmer>\d+)/products/categories/(?P<category>\d+)/$', list_farmer_products_by_category, name='list-farmer-products-by-category'),

]) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)