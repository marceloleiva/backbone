// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'views/home'
], function ($, _, Backbone, HomeView) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'homeAction'
        }
    });

    var initialize = function () {
        var app_router = new AppRouter;
        app_router.on('route:homeAction', function () {
            var homeView = new HomeView();
            homeView.render();
        });
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});