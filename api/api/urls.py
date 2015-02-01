from django.conf.urls import url, include
from django.conf.urls.static import static
from rest_framework.urlpatterns import format_suffix_patterns
from api import settings
from search.views import CityViewSet
from django.contrib import admin


city_list = CityViewSet.as_view({'get': 'list'})
city_filter_list = CityViewSet.as_view({'get': 'filter'})

urlpatterns = format_suffix_patterns([
    url(r'^admin/', include(admin.site.urls)),
    url(r'^cities/$', city_list, name='city-list'),
    url(r'^cities/filter/(?P<name>\w+)/$', city_filter_list, name='city-filter-list')
]) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)