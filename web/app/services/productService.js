/**
 * Created by tgrabus on 2015-02-14.
 */

define(['knockout', 'plugins/http', 'utils/strings', 'utils/links', 'models/product', 'models/farmer-product-model'],
    function (ko, http, strings, links, Product, FarmerProductModel) {

    function getProductsByCategory(category, callback)
    {
        var url = strings.format(links.getProductsByCategory, { category: category })

        http.get( url, { format: 'json' } ).then( function(response)
        {
            var products = response.map(function(product)
            {
                return new Product(product);
            });

            products = products.sort(function (a, b) {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            });

            callback(products);
        });
    };

    function getProducts(callback) {
        var url = strings.format(links.getProducts)

        http.get( url, { format: 'json' } ).then( function(response)
        {
            var products = response.map(function(product)
            {
                return new Product(product);
            });

            products = products.sort(function (a, b) {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            });

            callback(products);
        });
    }

    function getFarmerProducts(category, farmer, callback)
    {
        var url = strings.format(links.getFarmerProductsByCategory, { farmer: farmer, category: category });

        http.get( url, { format: 'json' } ).then( function(response)
        {
            var farmerProducts = response.map(function(farmerProduct)
            {
                return new FarmerProductModel(farmerProduct);
            });

            farmerProducts = farmerProducts.sort(function (a, b) {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            });

            callback(farmerProducts);
        });
    }

    return {
        getProductsByCategory: getProductsByCategory,
        getProducts: getProducts,
        getFarmerProductsByCategory: getFarmerProducts
    };
});
