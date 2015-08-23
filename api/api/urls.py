from django.conf.urls import url, include
from django.conf.urls.static import static
from rest_framework.urlpatterns import format_suffix_patterns
from api import settings
from search.views import *
from django.contrib import admin


city_list = CityViewSet.as_view({'get': 'list'})
city_filter_list = CityViewSet.as_view({'get': 'filter'})

list_products_by_category = ProductViewSet.as_view({'get': 'list_by_category'})
list_products = ProductViewSet.as_view({'get': 'list'})

list_farmers_by_localizations_and_products = SearchViewSet.as_view({'post': 'search_farmers'})


urlpatterns = format_suffix_patterns([


    url(r'^admin/', include(admin.site.urls)),

    url(r'^cities/$', city_list, name='city-list'),
    url(r'^cities/filter/(?P<name>\w+)/$', city_filter_list, name='city-filter-list'),

    url(r'^products/categories/(?P<category>\d+)/$', list_products_by_category, name='list-products-by-category'),
    url(r'^products/', list_products, name='list-products'),

    url(r'^search/$', list_farmers_by_localizations_and_products, name='list-farmers-by-localizations-and-products'),

]) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)