/**
 * Created by tgrabus on 2014-12-22.
 */

define(['knockout'], function(ko) {

    var localizationModel = function(localization) {
        this.positionX = localization.positionX,
        this.positionY = localization.positionY
    };

    return localizationModel;
})