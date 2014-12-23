define([
        'bootstrap',
        'knockout',
        'services/maps'
    ],
    function ($, ko, googleMap) {

        var account = function () {
            var self = this;

            self.attached = function () {
                var mapPanel = $("#map-canvas").get(0);
                googleMap.addMapToCanvas(mapPanel);
            };

            self.initMap = function() {
                googleMap.refreshMap();
            }

        };

        return account;
    });