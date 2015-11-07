

define([
        'knockout',
        'typeahead',
        'bloodhound',
        'services/city-provider',
        'viewmodels/map/location-item'
    ],
    function (ko, Typeahead, Bloodhound, CityProvider, LocationItemViewModel)
    {
        var cityProvider = new CityProvider();

        var ViewModel = function () {
            var self = this;
            self.cities = ko.observableArray([]);
        };

        ViewModel.prototype.init = function() {
            var self = this;

            return cityProvider.getAllCities().then(function(response){
                var locations = response.map(function(location)
                {
                    return new LocationItemViewModel(location);
                });

                self.cities(locations);
                initCityAutoComplete(locations);
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
                    //self.selectCity(datum.value)
                });
        }

        return ViewModel;
    }
)