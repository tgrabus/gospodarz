/**
 * User: tgrabus
 * Date: 18.10.14
 * Time: 00:53
 */

define([
        'bootstrap',
        'knockout',
        'fullPage',
        'services/map',
        'viewmodels/browser/categories',
        'viewmodels/browser/products',
        'viewmodels/browser/locations'
    ],
    function ($, ko, fullPage, MapService, CategoryViewModel, ProductViewModel, LocationViewModel)
    {
        var home = function ()
        {
            var self = this;
            var mapService = new MapService();

            self.categoryViewModel = new CategoryViewModel();
            self.productViewModel = new ProductViewModel();
            self.locationViewModel = new LocationViewModel();

            self.title = ko.observable(self.categoryViewModel.title)

            self.attached = function ()
            {
                initPageNavigation();
                exchangeResultsBetweenFilters();
            };

            function initPageNavigation() {

            }

            function exchangeResultsBetweenFilters() {
                self.productViewModel.selectedCategories = self.categoryViewModel.selectedCategories
                self.locationViewModel.selectedProducts = self.productViewModel.selectedProducts
            }
        };



        return home;
    });