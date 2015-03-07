define([
        'bootstrap',
        'knockout',
        'viewmodels/account/locations',
        'viewmodels/account/products',
    ],
    function ($, ko, LocationManager, ProductManager)
    {
        var account = function ()
        {
            var self = this;

            self.locationManager = ko.observable(new LocationManager());
            self.productManager = ko.observable(new ProductManager());

            self.attached = function ()
            {

            };

            self.activateLocationTab = function()
            {
                var a = self.locationManager();
                a.initMap();
            }
        };

        return account;
    });