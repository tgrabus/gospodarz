/**
 * Created by tgrabus on 2015-01-08.
 */
define(
    ['jquery', "async!http://maps.google.com/maps/api/js?key=AIzaSyDnjft0LXNv7VAstx0CYb9GqJ0sfy_GC5U&sensor=true!callback" ],
    function ($)
    {
        var googleGeocoder = new google.maps.Geocoder();

        var Geocoder = function() {
        };

        Geocoder.prototype.decodeAddress = function(latlng)
        {
            var $deferred = new $.Deferred();
            googleGeocoder.geocode({ 'latLng': latlng }, function(results, status)
            {
                if (status == google.maps.GeocoderStatus.OK)
                {
                    if (results[0])
                    {
                        $deferred.resolveWith(null, [results[0].formatted_address]);
                    }
                } else {
                    console.log("Geocoder failed due to: " + status);
                    $deferred.reject();
                }
            });

            return $deferred.promise();
        };

        Geocoder.prototype.decodeLatLng = function(address)
        {
            var $deferred = new $.Deferred();
            googleGeocoder.geocode({ 'address': address }, function(results, status)
            {
                if (status == google.maps.GeocoderStatus.OK)
                {
                    if (results[0])
                    {
                        $deferred.resolveWith(null, [results[0].geometry.location]);
                    }
                } else {
                    console.log("Geocoder failed due to: " + status);
                    $deferred.reject();
                }
            });
            return $deferred.promise();
        };

        return Geocoder;
    }
);