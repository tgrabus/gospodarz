/**
 * Created by tgrabus on 2015-09-05.
 */


define([
        'knockout',
        'models/categories',
        'services/productService'
    ],
    function (ko, categories,  productService)
    {
        var helper = function (viewmodel)
        {
            var viewModel = viewmodel;

            var self = this;

            self.getFilteredProducts = function () {
                var categories = viewModel.selectedCategories().map(function(category) {
                    return category.id();
                });

                if(categories.length === 0) {
                    return viewModel.allProducts();
                }

                return viewModel.allProducts().filter(function(product) {
                    return categories.indexOf(product.category) > -1;
                });
            }

            self.getSelectedCategories = function() {
                return viewModel.allProducts().filter(function(product) {
                    return product.isSelected();
                });
            }

            self.getProducts = function() {
                return productService.getProducts(function(data) {
                    viewModel.allProducts(data);
                });
            }

            self.selectProduct = function(product) {
                product.isSelected(!product.isSelected());

                if(product.isSelected() === true) {
                    product.isHighlighted(true);
                }else {
                    product.isHighlighted(false);
                }
            }

            self.highlightProduct = function(product) {
                if(product.isSelected() === false) {
                    product.isHighlighted(!product.isHighlighted());
                }
            }

            self.unhighlightProduct = function(product) {
                if(product.isSelected() === false) {
                    product.isHighlighted(false);
                }
            }
        };

        return helper;
    }
)