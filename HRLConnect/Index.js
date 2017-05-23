/// <reference path="c:\users\k.chandra.mandal\documents\visual studio 2015\Projects\HRLConnect\HRLConnect\Scripts/angular.js" />

//var HRLConnect = angular.module("HRLConnect", ['ngRoute']);

//HRLConnect.config(['$stateProvider',
//    function ($stateProvider) {
//        $stateProvider.
//        state('duSelect', {
//            url: '/HR&LConnect/DUSelect',
//            templateUrl: 'duSelect.html',
//            controllerAs: 'duSelectCtrl'
//        })
//        .state('dashboard', {
//            url: '/HR&LConnect/Dashboard',
//            templateUrl: 'Views/Dashboard.html',
//            controllerAs: 'dashboardCtrl'
//        });
//    }
//])

var HRLConnect = angular.module("HRLConnect", []);
angular
    .module('HRLConnect')
    .config(HRLConnectRoutes);

HRLConnectRoutes.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];

function HRLConnectRoutes($urlRouterProvider, $stateProvider, $locationProvider) {

    $stateProvider
    .state('dashboard', {
        url: '/HR&LConnect/Dashboard',
        templateUrl: 'Views/Dashboard.html',
        controllerAs: 'dashboardCtrl',
        data: {
            pageTitle: "Admin Events",
            showPageTitle: true,
        }
    });
}