/**
 * Created by tgrabus on 2015-03-14.
 */

define([
        'knockout',
        'models/category-model'
    ],
    function (ko, Category)
    {
        var categoryViewModel = function ()
        {
            var self = this;

            self.categories = ko.observableArray([]);

            self.selectedCategories = ko.computed(function() {
               return self.categories().filter(function(category) {
                   return category.isSelected();
               });
            });

            self.title = "Wybierz rodzaje produktów"

            self.attached = function ()
            {
                self.init();
            };

            self.init = function() {
                var categories = [
                    new Category({ id: 2, name: 'WARZYWA', picture: 'images/products/vegetables/kind1.jpg' }),
                    new Category({ id: 1, name: 'OWOCE', picture: 'images/products/fruits/kind1.jpg' })
                ];

                self.categories(categories);
            }

            self.select = function(category) {
                category.isSelected(!category.isSelected());
            }
        };

        return categoryViewModel;
    }
)