console.log('client');

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
        controllerAs: 'cont'
    }).when('/hershey', {
        templateUrl: 'views/hershey.html',
        controller: 'HersheyController',
        controllerAs: 'cont'
    }).when('/grace', {
        templateUrl: 'views/grace.html',
        controller: 'GraceController',
        controllerAs: 'cont'
    }).when('/snatch', {
            templateUrl: 'views/snatch.html',
            controller: 'SnatchController',
            controllerAs: 'cont'
    }).otherwise('/');
    
    // this is only for removing #!
    $locationProvider.html5Mode(true);
    });