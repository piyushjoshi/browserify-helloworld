'use strict';

var angular = require('angular'),
	angular_route = require('angular-route'),
	routes = require('./routes'),
	mainModule = angular.module('myApp', ['ngRoute']);

module.exports = mainModule;

routes.config(mainModule);