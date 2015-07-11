/**
 * Created by tgrabus on 2014-12-14.
 */

define([], function ()
{
    var links = function () {}

    var apiUrl = 'http://127.0.0.1:8000/'
    links.prototype.getCities = apiUrl + 'cities'
    links.prototype.getCitiesByName = apiUrl + 'cities/filter/{0}'
    links.prototype.getProductsByCategory = apiUrl + 'products/categories/{category}'
    links.prototype.getProducts = apiUrl + 'products/'
    links.prototype.getFarmerProductsByCategory = apiUrl + 'farmers/{farmer}/products/categories/{category}'
    links.prototype.searchNearestFarmers = apiUrl + 'search/'

    return new links();
});