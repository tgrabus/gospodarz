/**
 * Created by tgrabus on 2015-02-09.
 */

define([
        'knockout',
        'bootstrap-slider',
        'utils/strings',
        'utils/arrays',
        'services/map',
        'services/geocoder',
        'services/city-service',
        'services/localization-service',
        'typeahead',
        'bloodhound'
    ],
    function (ko, slider, strings, arrays, MapService, geocoderService, cityService, localizationService, Typeahead, Bloodhound)
    {
        var locationBrowser = function ()
        {
            var self = this;
            var collectionOfCities;

            self.selectedProducts = ko.observable();
            self.foundFarmers = ko.observable();

            var mapService = new MapService();

            self.title = "Wybierz lokalizacje"

            self.distance = ko.observable('50');

            self.attached = function ()
            {
                initSlider();
                cityService.getAllCities(getAllCitiesCallback);
                initMap();
            };

            self.search = function(latlng) {
                localizationService.searchNearestFarmers(latlng, self.selectedProducts(), searchNearestFarmersCallback);
            }

            self.distanceChanged = function () {
                console.log(self.distance());
            }

            function initMap()
            {
                var canvas = $("#select-location-on-map").get(0);

                if(canvas) {
                    mapService.loadMap(canvas, 53, 19);
                }
            }

            function initSlider() {
                $('#distance').slider({
                    formatter: function(value) {
                        return value + ' km';
                    }
                });
            }

            function initCityAutoComplete(cities) {

                var bloodhound = new Bloodhound({
                    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                    local: $.map(cities, function(city) { return { value: city.name }; })
                });

                bloodhound.initialize();

                $('#bloodhound .typeahead').typeahead({
                        hint: true,
                        highlight: true,
                        minLength: 1
                    },
                    {
                        name: 'cities',
                        displayKey: 'value',
                        source: bloodhound.ttAdapter()
                    }).on('typeahead:selected', function (obj, datum) {
                        self.selectCity(datum.value)
                    });
            }

            self.selectCity = function(selectedCity)
            {
                geocoderService.decodeLatLng(selectedCity, function(latlng) {
                    mapService.setCenter(latlng.lat(), latlng.lng());
                    self.search(latlng);
                });
            }

            function getAllCitiesCallback(cities)
            {
                collectionOfCities = cities;
                initCityAutoComplete(cities);
            }

            function searchNearestFarmersCallback(farmers) {
                mapService.removeAllMarkers();
                farmers.map(function (farmer) {
                    mapService.addMarker(farmer.latitude, farmer.longitude);
                });
            }
        };

        return locationBrowser;
    });