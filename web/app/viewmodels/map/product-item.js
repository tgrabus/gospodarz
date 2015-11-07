

define(['knockout'], function(ko)
{
    var Model = function(product)
    {
        this.id = product ? product.id : null;
        this.name = product ? product.name : '';
        this.image = product ? product.picture_url : '';
        this.isSelected = ko.observable(false);
    };

    return Model;
})