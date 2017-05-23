/// <reference path="c:\users\k.chandra.mandal\documents\visual studio 2015\Projects\HRLConnect\HRLConnect\Scripts/angular.js" />
/// <reference path="C:\Users\k.chandra.mandal\Documents\Visual Studio 2015\Projects\HRLConnect\HRLConnect\Scripts/angular-route.js" />

//var HRLConnect = angular.module("HRLConnect", ['ngRoute']);

//HRLConnect.config(['$routeProvider',
//    function ($routeProvider) {
//        $routeProvider.
//        when('duSelect', {
//            url: '/HR&LConnect/DUSelect',
//            templateUrl: 'duSelect.html',
//            controller: 'duSelectCtrl'
//        })
//        .when('dashboard', {
//            url: '/HR&LConnect/Dashboard',
//            templateUrl: 'Views/Dashboard.html',
//            controller: 'dashboardCtrl'
//        });
//    }
//])
var HRLConnect = angular.module("HRLConnect", ["ngRoute"]);
HRLConnect.config(function ($routeProvider, $locationProvider) {
    $locationProvider
  .html5Mode(false)
  .hashPrefix('HR&L Connect');
    $routeProvider
    .when("/", {
       
        templateUrl: "Views/Dashboard.html"
    })
    .when("/dashboard", {
        templateUrl: "Views/Dashboard.html"
    })
    .when("/profilePage", {
        templateUrl: "Views/ProfileDetails.html"
    });
    
});
//var HRLConnect = angular.module("HRLConnect", ['ui.router',
//                'ngAnimate',
//                'ngRoute',
//                'ui.bootstrap',
//                'ui.bootstrap.typeahead',
//                'ngTagsInput',
//                'ui.select']);
//angular
//    .module('HRLConnect')
//    .config(HRLConnect);

//HRLConnect.$inject = ['$rootScope','$state','$stateParams','$urlRouterProvider', '$stateProvider', '$locationProvider'];

//function HRLConnect($rootScope, $state, $stateParams,$urlRouterProvider, $stateProvider, $locationProvider) {

//    $stateProvider
//    .state('dashboard', {
//        url: '/HR&LConnect/Dashboard',
//        templateUrl: 'Views/Dashboard.html',
//        controllerAs: 'dashboardCtrl',
//        data: {
//            pageTitle: "Admin Events",
//            showPageTitle: true,
//        }
//    });
//}