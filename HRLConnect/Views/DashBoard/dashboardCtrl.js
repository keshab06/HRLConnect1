/// <reference path="C:\Users\k.chandra.mandal\Documents\Visual Studio 2015\Projects\HRLConnect\HRLConnect\Scripts/angular.js" />
/// <reference path="C:\Users\k.chandra.mandal\Documents\Visual Studio 2015\Projects\HRLConnect\HRLConnect\Index.js" />



var dash = angular.module("Dashboard", []);

dash.controller("DashboardCtrl", function ($scope, $rootScope) {
    $scope.mesg = 'abcd';
    console.log($scope.mesg);
});