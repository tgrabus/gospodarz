/**
 * Created by tgrabus on 2015-02-09.
 */

define([
        'knockout',
        'utils/strings',
        'utils/arrays',
        'models/CitySelectModel',
        'services/city-service'
    ],
    function (ko, strings, arrays, CityModel, cityService)
    {
        var locationBrowser = function ()
        {
            var self = this;
            var collectionOfCities;

            self.filteredCities = ko.observableArray([]);
            self.selectedCities = ko.observableArray([]);

            self.attached = function ()
            {
                cityService.getAllCities(getAllCitiesCallback);
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

                self.filteredCities(arrays.divideArrayBy(filtered, 6));
                highlightMatchedText('#filtered-cities a', searchedWord);
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
        };

        return locationBrowser;
    });