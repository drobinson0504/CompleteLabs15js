
var app = angular.module('wordStringMod', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/form', {
			controller:  'simpleCtrl',
			templateUrl:  'form.html'
		})
		.when('/display', {
			controller:  'simpleCtrl',
			templateUrl:  'display.html'
		});
});

app.controller('simpleCtrl', function() {

})

