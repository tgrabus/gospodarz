/**
 * User: tgrabus
 * Date: 18.10.14
 * Time: 00:53
 */

define([
        'bootstrap',
        'knockout',
        'utils/strings',
        'services/maps',
        'services/mock/filters'
    ],
    function ($, ko, strings, googleMap, filters) {

        var collectionOfCities = filters.getAllCities();

        var home = function () {
            this.filteredCities = ko.observableArray([]);
            this.selectedCities = ko.observableArray([]);
        };

        home.prototype.attached = function () {
            var mapPanel = $("#map-canvas").get(0);
            googleMap.addMapToCanvas(mapPanel);
        };

        home.prototype.searchForCities = function () {
            var searchedWord = $('#searchCity').val();

            if(strings.isNullOrEmpty(searchedWord)) {
                this.filteredCities([]);
                return;
            }

            var filtered = collectionOfCities.filter(function(city) {
                return new RegExp(searchedWord, "i").test(city);
            });

            this.filteredCities(divideArrayBy(filtered, 6));

            highlightMatchedText('#filtered-elements a', searchedWord);
        };

        home.prototype.selectCity = function(aa, bb) {
            var a = $(this);
            var b = 1;
        }

        return new home();
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

function selectCity(item, event)  {
    var clickedCity = item;
    var viewModel = ko.contextFor(event.target)
    var selectedCities = viewModel.selectedCities();
    var result = $(selectedCities).inArray(clickedCity, selectedCities);

    if(result === -1) {
        selectedCities.push(clickedCity);
    }

    viewModel.selectedCities(selectedCities);
}