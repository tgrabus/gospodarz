/**
 * Created by tgrabus on 2015-03-01.
 */

define(['knockout'], function(ko)
{
    var farmerProductModel = function(farmerProduct)
    {
        this.customName = farmerProduct.name;
        this.productName = farmerProduct.product;
        this.image = farmerProduct.picture_url;
        this.isSelected = ko.observable(false);
    };

    return farmerProductModel;
})