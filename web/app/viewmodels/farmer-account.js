define([
        'bootstrap',
        'knockout',
        'services/map',
        'services/geocoder'
    ],
    function ($, ko, MapService, geocoder)
    {
        var account = function ()
        {
            var self = this;
            var mapService = new MapService();

            self.selectedLocalizations = ko.observableArray([]);

            self.attached = function ()
            {
                initMap();
            };

            self.initLocalizationTab = function()
            {
				setTimeout(function()
                {
                    mapService.refreshMap();
                    mapService.setCenter( 54.469331, 17.023672 );
                    mapService.clearListeners(mapService.getMapInstance(), 'click');
                    mapService.addListener(mapService.getMapInstance(), 'click', addLocalizationOnMapClick);
				}, 1);
            }

            function initMap()
            {
                var canvas = $("#map-canvas").get(0);

                if(canvas) {
                    mapService.loadMap(canvas, 54.469331, 17.023672);
                }
            }

            function addLocalizationOnMapClick(event)
            {
                var marker = mapService.addMarker(event.latLng);

                mapService.addListener(marker, 'click', function()
                {
                    mapService.removeMarker(this);
                    //todo: remove from localization array
                });

                geocoder.decodeLatLng(event.latLng, function(localization)
                {
                    self.selectedLocalizations.push(localization);
                });
            }
        };

        return account;
    });