/**
 * Created by tgrabus on 2015-02-25.
 */

define([
        'knockout',
        'models/product-category',
        'services/product-service'
    ],
    function (ko, productCategory, productService)

    {
        var productManager = function ()
        {
            var self = this;
            var vegetables = ko.observable([]);
            var fruits = ko.observable([]);

            self.attached = function ()
            {
            };

            self.getVegetables = function(farmer)
            {
                productService.getFarmerProducts(productCategory.VEGETABLE, farmer, function(products) {

                });
            };

            self.getFruits = function(farmer)
            {
                productService.getFarmerProducts(productCategory.VEGETABLE, farmer, function(products) {

                });
            };
        };

        return productManager;
    }
)