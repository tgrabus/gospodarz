/**
 * Created by tgrabus on 2014-12-14.
 */

define([], function ()
{
    var links = function () {}

    var apiUrl = 'http://127.0.0.1:8000/'
    links.prototype.getCities = apiUrl + 'cities'
    links.prototype.getFilteredCities = apiUrl + 'cities/filter/{0}'
    links.prototype.getProducts = apiUrl + 'products/categories/{category}'

    return new links();
});