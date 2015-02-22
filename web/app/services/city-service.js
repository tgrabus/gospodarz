/**
 * User: tgrabus
 * Date: 20.10.14
 * Time: 20:07
 */

define(['knockout', 'plugins/http', 'utils/links', 'models/select-city-model'], function (ko, http, links, CitySelectModel) {

    function getAllCities(callback)
    {
        http.get( links.getCities, { format: 'json' } ).then( function(response)
        {
            var cities = response.map(function(city)
            {
                return new CitySelectModel(city);
            });

            cities = cities.sort(function (a, b) {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            });

            callback(cities);
        })
    }



    return {
        getAllCities: getAllCities
    };
});
