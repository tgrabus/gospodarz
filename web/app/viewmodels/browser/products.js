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
            self.allProducts = ko.observableArray([]);

            self.selectedCategories = ko.observableArray([]);

            self.filteredProducts = ko.computed(function() {
                var categories = self.selectedCategories().map(function(category) {
                    return category.id();
                });

                if(categories.length === 0) {
                    return self.allProducts();
                }

                return self.allProducts().filter(function(product) {
                    return categories.indexOf(product.category) > -1;
                });
            });

            self.selectedProducts = ko.computed(function() {
               return self.allProducts().filter(function(product) {
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
                self.allProducts(products);
            }
        };

        return productBrowser;
    }
)