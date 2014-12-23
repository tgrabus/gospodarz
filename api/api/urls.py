from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

from gospodarz.views.CityView import CityViewSet


city_list = CityViewSet.as_view({'get': 'list'})
city_filter_list = CityViewSet.as_view({'get': 'filter'})



urlpatterns = format_suffix_patterns([
    url(r'^cities/$', city_list, name='city-list'),
    url(r'^cities/filter/(?P<name>\w+)/$', city_filter_list, name='city-filter-list')

])