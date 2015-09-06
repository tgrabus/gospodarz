/**
 * Created by tgrabus on 2015-02-14.
 */

define(['knockout'], function(ko)
{
    var model = function(product)
    {
        this.id = product.id;
        this.name = product.name;
        this.image = product.picture_url;
        this.isSelected = ko.observable(false);
        this.category = product.product_category;
        this.isHighlighted = ko.observable(false);
    };

    return model;
})