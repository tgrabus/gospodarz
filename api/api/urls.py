from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

from gospodarz.views import CityView, FarmerView


urlpatterns = [
    url(r'^cities/$', CityView.CityList.as_view()),
    url(r'^cities/(?P<name>\w+)$', CityView.CitySubList.as_view()),
    url(r'^farmers/$', FarmerView.FarmerList.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)