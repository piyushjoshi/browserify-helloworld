'use strict';

var angular = require('angular');
module.exports = angular.module('greetingsModule',[])
			.controller('greetingsCtrl', require('./greetingsCtrl'));
