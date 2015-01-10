define([
        'bootstrap',
        'knockout',
        'services/maps'
    ],
    function ($, ko, googleMap) {

        var account = function () {
            var self = this;
            var mapService = new googleMap();

            self.attached = function () {
                var mapPanel = $("#map-canvas").get(0);
                mapService.addMapToCanvas(mapPanel);
            };

            self.initMap = function() {
			
				setTimeout(function() {
                    mapService.refreshMap();
                    mapService.trackMapClick();
				}, 1);
			
                
            }

        };

        return account;
    });