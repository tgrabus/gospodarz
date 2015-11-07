/**
 * Created by tgrabus on 2015-10-30.
 */


define(['knockout', 'plugins/http', 'utils/links'], function (ko, http, links) {

    var CityProvider = function () {
    }

    CityProvider.prototype.getAllCities = function () {
        return http.get(links.getCities, {format: 'json'});
    };

    return CityProvider;
});