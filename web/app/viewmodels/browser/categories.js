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

            self.title = "Wybierz rodzaje produktów"

            self.attached = function ()
            {
                self.init();
            };

            self.init = function() {
                var categories = [
                    new Category({ name: 'WARZYWA', picture: 'images/products/vegetables/kind1.jpg' }),
                    new Category({ name: 'OWOCE', picture: 'images/products/fruits/kind1.jpg' }),
                    new Category({ name: 'NABIAŁ', picture: 'images/products/dairy/kind1.jpg' }),
                    new Category({ name: 'MIĘSA', picture: 'images/products/meat/kind1.jpg' }),
                    new Category({ name: 'GRZYBY', picture: 'images/products/meat/kind1.jpg' }),
                    new Category({ name: 'RYBY', picture: 'images/products/meat/kind1.jpg' }),
                    new Category({ name: 'ORZECHY', picture: 'images/products/meat/kind1.jpg' })
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