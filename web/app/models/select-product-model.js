/**
 * Created by tgrabus on 2015-02-14.
 */

define(['knockout'], function(ko)
{
    var productSelectModel = function(product)
    {
        this.name = product.name;
        this.image = product.picture_url;
        this.isSelected = ko.observable(false);
    };

    return productSelectModel;
})