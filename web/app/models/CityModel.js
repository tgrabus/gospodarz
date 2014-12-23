/**
 * Created by tgrabus on 2014-11-03.
 */

define(['knockout'], function(ko) {

    var cityModel = function(city) {
        this.name = city.name;
        this.isSelected = ko.observable(false);
        this.positionX = city.positionX,
        this.positionY = city.positionY
    };

    return cityModel;
})

