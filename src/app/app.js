/**
* Created with TestAngular.
* User: bombadillo
* Date: 2014-11-21
* Time: 11:26 AM
* To change this template use Tools | Templates.
*/
(function () {       
    
    var app = angular.module("testApp", ["ngRoute"]);
    
	app.config(function($routeProvider) {
		$routeProvider.when("/main", {
			templateUrl: "src/app/templates/main.html",
			controller: "MainController",
			controllerAs: "main"
		})
		.otherwise({ redirectTo: "/main" });
	});    
    
})();