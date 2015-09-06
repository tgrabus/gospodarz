/**
 * Created by tgrabus on 2015-02-14.
 */

define([
        'knockout',
        'vmhelpers/browser/products'
    ],
    function (ko, ViewModelHelper)
    {
        var viewModel = function ()
        {
            var self = this;

            var helper = new ViewModelHelper(self);

            self.title = "Wybierz produkty"

            self.allProducts = ko.observableArray([]);

            self.selectedCategories = ko.observableArray([]);

            self.filteredProducts = ko.computed(function() {
                return helper.getFilteredProducts();
            });

            self.selectedProducts = ko.computed(function() {
               return helper.getSelectedCategories();
            });

            self.attached = function () {
                self.loadProducts();
            };

            self.loadProducts = function () {
                helper.getProducts();
            }

            self.selectProduct = function(product) {
                helper.selectProduct(product);
            }

            self.showTile = function(product) {
                helper.highlightProduct(product);

            }

            self.hideTile = function(product) {
                helper.unhighlightProduct(product);
            }
        };

        return viewModel;
    }
)