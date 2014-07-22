'use strict';

var homeRoute = require('./home/homeRoute'),
	homeCtrl = require('./home/homeCtrl');

module.exports = {
	config : function(mainModule) {
		mainModule.config(function($routeProvider) {
			$routeProvider.when('/', homeRoute);
		});
		mainModule.controller('homeCtrl', homeCtrl);
	}
};