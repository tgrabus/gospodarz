

define(
    [ "async!http://maps.google.com/maps/api/js?key=AIzaSyDnjft0LXNv7VAstx0CYb9GqJ0sfy_GC5U&sensor=true!callback" ],
    function()
    {
        var self = this;
        var map_instance;
        var markers = [];

        return function()
        {
            this.loadMap = function( canvas, latitude, longitude )
            {
                var myOptions = {
                    center: new google.maps.LatLng( latitude, longitude ),
                    zoom: 7,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    disableDefaultUI: true,
                    scrollwheel: false
                };

                var map = new google.maps.Map( canvas, myOptions );
                map_instance = map;
            }

            this.getMapInstance = function() {
                return map_instance;
            }

            this.isMapLoaded = function()
            {
                return map_instance ? true : false;
            }

            this.refreshMap = function()
            {
                if(!map_instance) {
                    return;
                }

                google.maps.event.trigger( map_instance, 'resize' );
            }

            this.setCenter = function( latitude, longitude )
            {
                if(!map_instance) {
                    return;
                }

                map_instance.setCenter( new google.maps.LatLng( latitude, longitude ) );
            }

            this.addListener = function(target, event, handler)
            {
                google.maps.event.addListener( target, event, handler );
            }

            this.clearListeners = function(target, event)
            {
                if(event) {
                    google.maps.event.clearListeners(target, event);
                }
                else {
                    google.maps.event.clearInstanceListeners(target);
                }
            }

            this.addMarker = function(latitude, longitude)
            {
                if(!map_instance) {
                    return;
                }


                var newMarker = new google.maps.Marker({
                    position: new google.maps.LatLng( latitude, longitude ),
                    map: map_instance
                });

                markers.push(newMarker);
                return newMarker;
            };

            this.removeMarker = function(marker)
            {
                marker.setMap(null);
                var index = markers.indexOf(marker);
                if(index != -1) {
                    markers.splice(index, 1);
                }
            }

            this.removeAllMarkers = function() {
                while (markers.length > 0) {
                    markers.pop().setMap(null);
                }
            }
        }
    }
);