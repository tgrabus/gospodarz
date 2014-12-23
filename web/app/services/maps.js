/**
 * User: tgrabus
 * Date: 19.10.14
 * Time: 17:55
 */

define(
    [ "async!http://maps.google.com/maps/api/js?key=AIzaSyDnjft0LXNv7VAstx0CYb9GqJ0sfy_GC5U&sensor=true!callback" ],
    function() {
        var self = this;

        return {

            addMapToCanvas: function( mapCanvas ) {
                var myOptions = {
                    center: new google.maps.LatLng( -34.397, 150.644 ),
                    zoom: 8,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                var map = new google.maps.Map( mapCanvas, myOptions );
                self = map;

            },
            refreshMap: function() {
                google.maps.event.trigger(map, 'resize');
            }
        }
    }
);