/**
 * User: tgrabus
 * Date: 13.10.14
 * Time: 22:19
 */


requirejs.config({
    paths: {
        'text': '../bower_components/requirejs-text/text',
        'durandal':'../bower_components/durandal/js',
        'plugins' : '../bower_components/durandal/js/plugins',
        'transitions' : '../bower_components/durandal/js/transitions',
        'knockout': '../bower_components/knockout.js/knockout',
        'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',
        'jquery': '../bower_components/jquery/jquery'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        }
    }
});

define(function (require) {
    var system = require('durandal/system'),
        app = require('durandal/app'),
        viewLocator = require('durandal/viewLocator');

    system.debug(true);

    app.title = 'Gospodarz';

    app.configurePlugins({
        router: true,
        dialog: true
    });

    app.start().then(function() {

        viewLocator.useConvention();

        app.setRoot('viewmodels/shell');
    });
});