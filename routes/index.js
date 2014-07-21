'use strict';

var homeRoute = require('./home/homeRoute'),
	mainModule = require('../main.js');

console.log(mainModule);
module.exports = function(mainModule){
	return function($routeProvider){
		$routeProvider.when('/',homeRoute(mainModule));
	};
};