'use strict';

var homeCtrl = require('./homeCtrl');

module.exports = function(mainModule){
	return {
		templateUrl : 'templates/home.html',
		controller : 'homeCtrl'
	};
};