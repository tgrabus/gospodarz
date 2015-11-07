/**
 * User: tgrabus
 * Date: 13.10.14
 * Time: 22:52
 */

define(function (require)
{
    var router = require('plugins/router');

    return {
        router: router,
        activate: function ()
        {
            router.map([
                { route: '', title: 'Home', moduleId: 'viewmodels/map/index', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});