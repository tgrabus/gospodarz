/**
 * User: tgrabus
 * Date: 18.10.14
 * Time: 00:53
 */

define([
    'bootstrap',
    'knockout',
    'services/maps',
    'services/mock/filters'],
    function (jQuery, ko, googleMap, filters) {
        return {
            attached: function (view, parent) {
                var mapPanel = jQuery("#map-canvas").get(0);
                //googleMap.addMapToCanvas(mapPanel);

                jQuery("#searchCity").keyup(function() {
                    jQuery("#mistake").focus();
                    jQuery("#searchCity").focus();
                });
            },
            dupa: function(item, event) {
                var i = 1;
                var a = 2;
            },
            cities: filters.getAllCities(),
            filteredCities: ko.observableArray(divideArrayBy(filters.getAllCities(), 6)),
            searchForCities: searchForCities,
            enteredValue: ko.observable(""),
            selectedCities: ko.observableArray([]),
            selectCity: selectCity
        };
    });

function divideArrayBy(arraySource, spliceDivider) {
    var arrays = [];
    var spliceLength = Math.ceil(arraySource.length / spliceDivider);

    while (arraySource.length > 0)
        arrays.push(arraySource.splice(0, spliceLength));

    return arrays;
}


function searchForCities(viewModel) {
    var searchedWord = $('#searchCity').val();
    var regex = new RegExp(searchedWord, "i");
    var filtered = viewModel.cities.filter(function(item) {
        return regex.test(item);
    });

    this.filteredCities(divideArrayBy(filtered, 6));
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

