/**
 * Created by tgrabus on 2015-05-06.
 */

define(['knockout'], function(ko) {

    var categoryModel = function(category) {
        this.name = ko.observable(category.name);
        this.picture = ko.observable(category.picture);
        this.isSelected = ko.observable(false);
    };

    return categoryModel;
})