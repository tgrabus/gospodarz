/**
 * Created by tgrabus on 2015-02-14.
 */

define([
        'knockout',
        'utils/arrays',
        'models/product-category',
        'services/product-service'
    ],
    function (ko, arrays, productCategory,  productService)
    {
        var productBrowser = function ()
        {
            var self = this;
            self.filteredProducts = ko.observableArray([]);

            self.selectedProducts = ko.computed(function() {
               return self.filteredProducts().filter(function(product) {
                   return product.isSelected();
               })
            });

            self.title = "Wybierz produkty"

            self.attached = function ()
            {
                self.loadProducts();
            };

            self.loadProducts = function ()
            {
                productService.getProducts(getProductsCallback)
            }

            self.selectProduct = function(product)
            {
                product.isSelected(!product.isSelected());
            }

            function getProductsCallback(products)
            {
                self.filteredProducts(products);
            }
        };

        return productBrowser;
    }
)