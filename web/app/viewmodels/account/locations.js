/**
 * Created by tgrabus on 2015-02-25.
 */

define([
        'knockout',
        'services/map',
        'services/geocoder'
    ],
    function (ko, MapService, geocoder)
    {
        var locationManager = function ()
        {
            var mapService = new MapService();
            var self = this;

            self.selectedLocalizations = ko.observableArray([]);
            self.isLoaded = false;

            self.attached = function ()
            {
            };

            self.initMap = function ()
            {
                if(self.isLoaded === true) {
                    return;
                }

                setTimeout(function() {
                    var canvas = $("#map-canvas").get(0);

                    if(canvas) {
                        mapService.loadMap(canvas, 54.469331, 17.023672);
                        mapService.clearListeners(mapService.getMapInstance(), 'click');
                        mapService.addListener(mapService.getMapInstance(), 'click', addLocalizationOnMapClick);
                    }
                }, 1);

                self.isLoaded = true;
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

        return locationManager;
    }
)