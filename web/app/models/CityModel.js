/**
 * Created by tgrabus on 2014-11-03.
 */

define(['knockout'], function(ko) {

    var cityModel = function(city) {
        this.name = city;
        this.isSelected = ko.observable(false);
    };

    return cityModel;
})

