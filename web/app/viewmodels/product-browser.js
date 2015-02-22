/**
 * Created by tgrabus on 2015-02-14.
 */

define([
        'knockout',
        'utils/arrays',
        'models/ProductCategory',
        'services/product-service'
    ],
    function (ko, arrays, CategoryEnum, productService)
    {
        var productBrowser = function ()
        {
            var self = this;
            var collectionOfProducts;

            self.filteredProducts = ko.observableArray([]);
            self.selectedProducts = ko.observableArray([]);
            self.isLoaded = false;

            self.attached = function ()
            {
            };

            self.loadProducts = function (category)
            {
                if(CategoryEnum.validate(category)) {
                    productService.getProducts(category, getProductsCallback)
                }
            }

            self.selectProduct = function(selectedProduct)
            {
                var selectedProducts = self.selectedProducts();

                if(!selectedProduct.isSelected()) {
                    selectedProduct.isSelected(true);
                    selectedProducts.push(selectedProduct);
                    self.selectedProducts(selectedProducts);
                }
            }

            function getProductsCallback(products)
            {
                collectionOfProducts = products;
                self.filteredProducts(arrays.divideArrayBy(products, 6));
                self.isLoaded = true;
            }


        };

        return productBrowser;
    }
)