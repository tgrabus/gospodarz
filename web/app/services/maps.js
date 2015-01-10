/**
 * User: tgrabus
 * Date: 19.10.14
 * Time: 17:55
 */

define(
    [ "async!http://maps.google.com/maps/api/js?key=AIzaSyDnjft0LXNv7VAstx0CYb9GqJ0sfy_GC5U&sensor=true!callback" ],
    function() {
        var self = this;
		var map_instance;
        var markers = [];

        return function() {

            this.addMapToCanvas = function( mapCanvas ) {
                var myOptions = {
                    center: new google.maps.LatLng( 54.469331, 17.023672 ),
                    zoom: 13,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                var map = new google.maps.Map( mapCanvas, myOptions );
                map_instance = map;
            }

            this.refreshMap = function() {
                if(!map_instance) {
                    return;
                }

                google.maps.event.trigger(map_instance, 'resize');
                map_instance.setCenter(new google.maps.LatLng( 54.469331, 17.023672 ));
            }

            this.trackMapClick = function () {
                if(!map_instance) {
                    return;
                }

                google.maps.event.addListener(map_instance, 'click', function(event) {
                    addMarker(event.latLng);
                });
            }

            function attachMarkersTo(map) {
                for (var i = 0; i < markers.length; i++) {
                    markers[i].setMap(map);
                }
            }

            function addMarker(position) {
                var marker = new google.maps.Marker({
                    position: position,
                    map: map_instance
                });

                google.maps.event.addListener(marker, "click", function() {
                    marker.setMap(null);
                });

                markers.push(marker);
            }

            this.detachMarkers = function() {
                attachMarkersTo(null);
            }

            this.attachMarkers = function() {
                attachMarkersTo(map_instance);
            }

            this.deleteMarkers = function() {
                detachMarkers();
                markers = [];
            }
        }
    }
);