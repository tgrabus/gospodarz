

define([
        'knockout',
        'services/google-map-adapter',
        'viewmodels/map/product-filter',
        'viewmodels/map/location-filter'
    ],
    function (ko, GoogleMapAdapter, ProductFilterViewModel, LocationFilterViewModel)
    {
        var googleMapAdapter = new GoogleMapAdapter();

        var ViewModel = function () {
            var self = this;
            self.productFilterViewModel = new ProductFilterViewModel();
            self.locationFilterViewModel = new LocationFilterViewModel();
        };

        ViewModel.prototype.activate = function() {
            var promise1 = this.productFilterViewModel.init();
            var promise2 = this.locationFilterViewModel.init();
            return $.when( promise1, promise2 );
        }

        ViewModel.prototype.attached = function() {
            this.initGoogleMap();
        }

        ViewModel.prototype.initGoogleMap = function() {
            var canvas = $("#result-map").get(0);

            if(canvas) {
                googleMapAdapter.loadMap(canvas, 53, 19);
            }
        }

        ViewModel.prototype.displayProductFilter = function() {
            $('#location-filter').hide();
            $('#product-filter').toggle();
        }

        ViewModel.prototype.displayLocationFilter = function() {
            $('#product-filter').hide();
            $('#location-filter').toggle();
        }

        ViewModel.prototype.closeFilters = function() {
            $('#location-filter').hide();
            $('#product-filter').hide();
        }

        return ViewModel;
    });