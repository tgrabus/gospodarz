/**
 * Created by tgrabus on 2015-02-09.
 */

define([
        'knockout',
        'utils/strings',
        'utils/arrays',
        'services/map',
        'services/geocoder',
        'services/city-service',
        'services/localization-service',
        'typeahead',
        'bloodhound'
    ],
    function (ko, strings, arrays, MapService, geocoderService, cityService, localizationService, Typeahead, Bloodhound)
    {
        var locationBrowser = function ()
        {
            var self = this;
            var collectionOfCities;

            self.selectedProducts = ko.observable();
            self.foundFarmers = ko.observable();

            var mapService = new MapService();

            self.title = "Wybierz lokalizacje"

            self.attached = function ()
            {
                cityService.getAllCities(getAllCitiesCallback);
                initMap();
            };

            self.search = function(latlng) {
                localizationService.searchNearestFarmers(latlng, self.selectedProducts(), searchNearestFarmersCallback);
            }

            function initMap()
            {
                var canvas = $("#select-location-on-map").get(0);

                if(canvas) {
                    mapService.loadMap(canvas, 54.469331, 17.023672);
                }
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