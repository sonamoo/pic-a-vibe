'use strict';
var picaVibe = angular.module('picaVibe', []);

picaVibe.controller('inputController',
    function inputController($scope){
        // $scope.add = function(string){
        //     console.log(string);
        // }
    });

picaVibe.controller('mainController',
    function mainController($scope, $http) {
        $http({
            url: "/search/Chicago",
            method: "GET"
        }).then(function successCallback(response) {
            console.log(response);
            var array = response.data.value;
            $scope.res = array;

        }, function errorCallback(response) {
            console.log("Ooops your http request failed.");
        });




    });
