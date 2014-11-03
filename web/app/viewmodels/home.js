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
        'services/maps',
        'services/mock/filters'
    ],
    function ($, ko, strings, CityModel, googleMap, filters) {

        var collectionOfCities = filters.getAllCities();
        var NOT_FOUND_IN_ARRAY = -1;

        var home = function () {
            var self = this;

            self.filteredCities = ko.observableArray([]);
            self.selectedCities = ko.observableArray([]);

            self.attached = function () {
                var mapPanel = $("#map-canvas").get(0);
                googleMap.addMapToCanvas(mapPanel);
            };

            self.searchForCities = function () {
                var searchedWord = $('#searchCity').val();

                if(strings.isNullOrEmpty(searchedWord)) {
                    self.filteredCities([]);
                    return;
                }

                var filtered = collectionOfCities.filter(function(city) {
                    return new RegExp(searchedWord, "i").test(city.name);
                });

                self.filteredCities(divideArrayBy(filtered, 6));

                highlightMatchedText('#filtered-elements a', searchedWord);
            };

            self.selectCity = function(selectedCity) {
                var selectedCities = self.selectedCities();

                if(!selectedCity.isSelected()) {
                    selectedCity.isSelected(true);
                    selectedCities.push(selectedCity);
                    self.selectedCities(selectedCities);
                }
            }
        };

        return home;
    });



function highlightMatchedText(source, pattern, color) {
    $(source).each(function() {
        var text = $(this).text();
        var highlightText = text.replace(new RegExp('(' + pattern + ')', 'gi'), '<span style="background-color: #d3d3d3">$1</span>');
        $(this).html(highlightText);
    });
}

function divideArrayBy(arraySource, spliceDivider) {
    var arrays = [];
    var spliceLength = Math.ceil(arraySource.length / spliceDivider);

    while (arraySource.length > 0)
        arrays.push(arraySource.splice(0, spliceLength));

    return arrays;
}