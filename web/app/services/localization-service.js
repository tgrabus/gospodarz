/**
 * Created by tgrabus on 2015-07-05.
 */

define(['knockout', 'plugins/http', 'utils/links', 'models/select-city-model'], function (ko, http, links) {

    function searchNearestFarmers(latlng, products, callback)
    {
        var data = {
            x: latlng.lat(),
            y: latlng.lng(),
            product_ids: products.map(function(product) {
                return product.id;
            })
        };

        http.post( links.searchNearestFarmers, data, { accept: 'application/json' }).then( function(response)
        {


            callback(response);
        })
    }



    return {
        searchNearestFarmers: searchNearestFarmers
    };
});
