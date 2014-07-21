'use strict';

var angular = require('angular'),
	angular_route = require('angular-route'),
	routes = require('./routes');
console.log(angular.module);
console.log(angular_route.name);

var mainModule = angular.module('myApp', ['ngRoute']);
module.exports = mainModule.config(routes(mainModule));
mainModule.controller('homeCtrl', ['$scope',function($scope){
	$scope.user = {
			name : 'Piyush Joshi'
	};
}]);
