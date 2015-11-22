

define([
        'knockout',
        'typeahead',
        'bloodhound',
        'services/geocoder',
        'services/city-provider',
        'viewmodels/map/location-item'
    ],
    function (ko, Typeahead, Bloodhound, Geocoder, CityProvider, LocationItemViewModel)
    {
        var cityProvider = new CityProvider();
        var geocoder = new Geocoder();

        var ViewModel = function () {
            var self = this;
            self.cities = ko.observableArray([]);
            self.selectedCity = ko.observable('');
        };

        ViewModel.prototype.initData = function() {
            var self = this;

            return cityProvider.getAllCities().then(function(response){
                var locations = response.map(function(location)
                {
                    return new LocationItemViewModel(location);
                });

                self.cities(locations);
            });
        };

        ViewModel.prototype.initView = function() {
            var self = this;
            fillAutoComplete(self);
        };

        ViewModel.prototype.decodeLocalization = function() {
            var self = this;
            return geocoder.decodeLatLng(self.selectedCity());
        };

        function fillAutoComplete(self) {

            var bloodhound = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                local: $.map(self.cities(), function(city) { return { value: city.name }; })
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
                    self.selectedCity(datum.value);
                });
        }

        return ViewModel;
    }
)