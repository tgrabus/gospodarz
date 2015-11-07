

define([
        'knockout',
        'services/product-provider',
        'viewmodels/map/product-item'
    ],
    function (ko, ProductProvider, ProductItemViewModel)
    {
        var productProvider = new ProductProvider();

        var ViewModel = function () {
            var self = this;
            self.allProducts = ko.observableArray([]);
            self.filteredProducts = ko.computed(function() {
                return self.allProducts();
            });
        };

        ViewModel.prototype.init = function() {
            var self = this;
            return self.loadProducts();
        }

        ViewModel.prototype.loadProducts = function() {
            var self = this;

            return productProvider.getProducts().then(function(data) {
                var products = data.map(function(item) {
                    return new ProductItemViewModel(item);
                }).sort(function (a, b) {
                    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
                });

                self.allProducts(products);
            });
        }

        ViewModel.prototype.selectProduct = function(product) {
            product.isSelected(!product.isSelected());
        }

        ViewModel.prototype.getSelectedProducts = function() {
            return self.allProducts().filter(function(product) {
               return product.isSelected();
            });
        }

        return ViewModel;
    }
)