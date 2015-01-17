/**
 * User: tgrabus
 * Date: 18.10.14
 * Time: 00:53
 */

define([
        'bootstrap',
        'knockout',
        'utils/strings',
        'models/CityModel',
        'services/map',
        'services/home-service'
    ],
    function ($, ko, strings, CityModel, MapService, homeService)
    {
        var home = function ()
        {
            var self = this;
            var collectionOfCities;
            var mapService = new MapService();

            self.filteredCities = ko.observableArray([]);
            self.selectedCities = ko.observableArray([]);

            self.attached = function ()
            {
                initMap();
                homeService.getAllCities(getAllCitiesCallback);
            };

            self.searchCities = function ()
            {
                var searchedWord = $('#searchCity').val();

                if(strings.isNullOrEmpty(searchedWord)) {
                    self.filteredCities([]);
                    return;
                }

                var filtered = collectionOfCities.filter(function(city) {
                    //return new RegExp(searchedWord, "i").test(city.name); // search in whole word/s
                    return new RegExp("^" + searchedWord, "i").test(city.name);
                });

                self.filteredCities(divideArrayBy(filtered, 6));
                highlightMatchedText('#filtered-elements a', searchedWord);
            };

            self.selectCity = function(selectedCity)
            {
                var selectedCities = self.selectedCities();

                if(!selectedCity.isSelected()) {
                    selectedCity.isSelected(true);
                    selectedCities.push(selectedCity);
                    self.selectedCities(selectedCities);
                }
            }

            function initMap()
            {
                var canvas = $("#map-canvas").get(0);

                if(canvas) {
                    mapService.loadMap(canvas, 54.469331, 17.023672);
                }
            }

            function getAllCitiesCallback(cities)
            {
                collectionOfCities = cities;
            }

            function highlightMatchedText(source, pattern, color)
            {
                $(source).each(function()
                {
                    var text = $(this).text();
                    var highlightText = text.replace(new RegExp('(' + pattern + ')', 'gi'), '<span style="background-color: #d3d3d3">$1</span>');
                    $(this).html(highlightText);
                });
            }

            function divideArrayBy(arraySource, spliceDivider)
            {
                var arrays = [];
                var spliceLength = Math.ceil(arraySource.length / spliceDivider);

                while (arraySource.length > 0) {
                    arrays.push(arraySource.splice(0, spliceLength));
                }

                return arrays;
            }
        };

        return home;
    });