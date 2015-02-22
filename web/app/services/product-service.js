/**
 * Created by tgrabus on 2015-02-14.
 */

define(['knockout', 'plugins/http', 'utils/strings', 'utils/links', 'models/ProductSelectModel'], function (ko, http, strings, links, ProductSelectModel) {

    function getProducts(category, callback)
    {
        var url = strings.format(links.getProducts, { category: category })

        http.get( url, { format: 'json' } ).then( function(response)
        {
            var products = response.map(function(product)
            {
                return new ProductSelectModel(product);
            });

            products = products.sort(function (a, b) {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            });

            callback(products);
        })
    }



    return {
        getProducts: getProducts
    };
});
