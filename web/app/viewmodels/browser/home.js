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
                //initMap();
                exchangeResultsBetweenFilters();
            };

            function initPageNavigation() {
                $('#fullpage').fullpage({
                    anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
                    sectionsColor: ['#fffff', '#fffff', '#fffff', '#fffff'],
                    navigation: false,
                    navigationPosition: 'right',

                    scrollBar: true,
                    controlArrows: true,
                    verticalCentered: false,
                    resize : true,
                    paddingBottom: '0px',
                    responsive: 0,
                    paddingTop: '200px', //143

                    onLeave: function(index, nextIndex, direction){
                        if(nextIndex === 1){
                            self.title(self.categoryViewModel.title);
                        }
                        else if(nextIndex === 2){
                            self.title(self.productViewModel.title);
                        }
                        else if(nextIndex === 3){
                            self.title(self.locationViewModel.title);
                        }
                    }
                });
            }

            function initMap()
            {
                var canvas = $("#map-canvas").get(0);

                if(canvas) {
                    mapService.loadMap(canvas, 54.469331, 17.023672);
                }
            }

            function exchangeResultsBetweenFilters() {
                self.productViewModel.selectedCategories = self.categoryViewModel.selectedCategories
                self.locationViewModel.selectedProducts = self.productViewModel.selectedProducts
            }
        };



        return home;
    });