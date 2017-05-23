/// <reference path="c:\users\k.chandra.mandal\documents\visual studio 2015\Projects\HRLConnect\HRLConnect\Scripts/angular.js" />

angular
    .module('HRLConnect')
    .controller('duSelectCtrl', duSelectCtrl);
duSelectCtrl.$inject = ['$scope', '$rootScope', '$stateParams', '$location'];

function duSelectCtrl($scope, $rootScope, $stateParams, $location) {

    $location.path('D U Select');
}