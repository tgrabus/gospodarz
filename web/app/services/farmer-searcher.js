/**
 * Created by tgrabus on 2015-07-05.
 */

define(['plugins/http', 'utils/links'], function (http, links) {

    var FarmerSearcher = function() {
    };

    FarmerSearcher.prototype.search = function(latlng, products)
    {
        var data = {
            x: latlng.lat(),
            y: latlng.lng(),
            product_ids: products.map(function(product) {
                return product.id;
            })
        };

        return http.post( links.searchNearestFarmers, data, { accept: 'application/json' });
    };

    return FarmerSearcher;
});
