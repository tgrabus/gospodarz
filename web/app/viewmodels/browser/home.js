/**
 * User: tgrabus
 * Date: 18.10.14
 * Time: 00:53
 */

define([
        'bootstrap',
        'knockout',
        'services/map',
        'viewmodels/browser/locations',
        'viewmodels/browser/products',
        'models/product-category',
    ],
    function ($, ko, MapService, LocationBrowser, ProductBrowser, productCategory)
    {
        var home = function ()
        {
            var self = this;
            var mapService = new MapService();

            self.locationBrowser = ko.observable(new LocationBrowser());
            self.vegetableBrowser = ko.observable(new ProductBrowser());
            self.fruitBrowser = ko.observable(new ProductBrowser());

            self.attached = function ()
            {
                initMap();
                initTooltips();
            };

            self.activateVegetableTab = function()
            {
                self.vegetableBrowser().loadProducts(productCategory.VEGETABLE);
            }

            self.activateFruitTab = function()
            {
                self.fruitBrowser().loadProducts(productCategory.FRUIT);
            }

            function initMap()
            {
                var canvas = $("#map-canvas").get(0);

                if(canvas) {
                    mapService.loadMap(canvas, 54.469331, 17.023672);
                }
            }

            function initTooltips() {
                $('#selected-filters').tooltip({
                    selector: '.delete-selected-product'
                });
            }
        };

        return home;
    });