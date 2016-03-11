

define([
        'knockout',
        'services/google-map-adapter',
        'services/farmer-searcher',
        'viewmodels/map/product-filter',
        'viewmodels/map/location-filter'
    ],
    function (ko, GoogleMapAdapter, FarmerSearcher, ProductFilterViewModel, LocationFilterViewModel)
    {
        var googleMapAdapter = new GoogleMapAdapter();
        var farmerSearcher = new FarmerSearcher();

        var ViewModel = function () {
            var self = this;
            self.productFilterViewModel = new ProductFilterViewModel();
            self.locationFilterViewModel = new LocationFilterViewModel();
        };

        ViewModel.prototype.activate = function() {
            var promise1 = this.productFilterViewModel.initData();
            var promise2 = this.locationFilterViewModel.initData();
            return $.when( promise1, promise2 );
        };

        ViewModel.prototype.attached = function() {
            this.initGoogleMap();
            this.locationFilterViewModel.initView();
        };

        ViewModel.prototype.initGoogleMap = function() {
            var canvas = $("#result-map").get(0);

            if(canvas) {
                googleMapAdapter.loadMap(canvas, 53, 19);
            }
        };

        ViewModel.prototype.displayProductFilter = function() {
            $('#location-filter').hide();
            $('#product-filter').slideToggle(200);
        };

        ViewModel.prototype.displayLocationFilter = function() {
            $('#product-filter').hide();
            $('#location-filter').slideToggle(200);
        };

        ViewModel.prototype.closeFilters = function() {
            $('#location-filter').slideUp(200);
            $('#product-filter').slideUp(200);
        };

        ViewModel.prototype.search = function() {
            var self = this;
            self.locationFilterViewModel.decodeLocalization().then(function(latlng) {
                farmerSearcher.search(latlng, self.productFilterViewModel.getSelectedProducts()).then(function(farmers) {
                    googleMapAdapter.removeAllMarkers();
                    googleMapAdapter.setCenter(latlng.lat(), latlng.lng());
                    farmers.map(function (farmer) {
                        googleMapAdapter.addMarker(farmer.latitude, farmer.longitude);
                    });
                    self.closeFilters();
                });
            });
        };

        return ViewModel;
    });