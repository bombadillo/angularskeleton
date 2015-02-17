/**
* Created with TestAngular.
* User: bombadillo
* Date: 2014-11-21
* Time: 12:03 PM
* To change this template use Tools | Templates.
*/
(function () {
   
    var app = angular.module("testApp");

    app.controller("MainController", MainController);
    
    function MainController () {
        vm = this;
        vm.title = "Guacamole!";
    }
    
})();