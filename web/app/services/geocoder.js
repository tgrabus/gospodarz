/**
 * Created by tgrabus on 2015-01-08.
 */
define(
    [ "async!http://maps.google.com/maps/api/js?key=AIzaSyDnjft0LXNv7VAstx0CYb9GqJ0sfy_GC5U&sensor=true!callback" ],
    function ()
    {
        var geocoder = function()
        {
            var googleGeocoder = new google.maps.Geocoder();

            this.decodeLatLng = function(latlng, callback)
            {
                googleGeocoder.geocode({ 'latLng': latlng }, function(results, status)
                {
                    if (status == google.maps.GeocoderStatus.OK)
                    {
                        if (results[1])
                        {
                            callback(results[0].formatted_address);
                        }
                    } else {
                        alert("Geocoder failed due to: " + status);
                    }
                });
            }
        }

        return new geocoder();
    }
);