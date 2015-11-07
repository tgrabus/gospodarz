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
        'jquery': '../bower_components/jquery/jquery',
        'typeahead': '../bower_components/typeahead.js/dist/typeahead.jquery',
        'bloodhound': '../bower_components/typeahead.js/dist/bloodhound',
        'fullPage': '../bower_components/fullpage.js/jquery.fullPage',
        'underscore': '../bower_components/underscore/underscore',
        'async': '../bower_components/requirejs-plugins/src/async',
        'bootstrap-slider': '../bower_components/seiyria-bootstrap-slider/js/bootstrap-slider',
        'services': 'services',
        'utils': 'utils'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        'typeahead': {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        'bloodhound':{
            deps: ['jquery'],
            exports: 'Bloodhound'
        },
        'underscore': {
            exports: '_'
        },
        'fullPage': {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        'bootstrap-slider': {
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

        app.setRoot('viewmodels/shell', 'entrance');
    });
});