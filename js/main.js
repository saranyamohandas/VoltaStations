// Code goes here
'use strict';
var myApp = angular.module('myApp',['ngAnimate', 'ngSanitize','ui.bootstrap','angular.filter']);

 myApp.controller('mainCtrl',function($scope,$filter,$http,$timeout,$interval,$log){
         
    $http.get("https://api.voltaapi.com/v1/stations")
    .then(function(response) {
            $scope.station = response.data;
            $scope.stationResultSize = $scope.station.length;
            $scope.stationPerPage = 10;
            $scope.currentPage = 1;
            $scope.maxSize = 5; //$scope.stationResultSize/$scope.stationPerPage;
        $log.info("stations per page" ,$scope.stationResultSize);
             }, function myError(response) {
          $scope.station = response.statusText;
    })
 
//Apply sort to columns  
         $scope.sort = function(key){
         $scope.sortKey = key;
         $scope.reverse = !$scope.reverse;

        };
   
    $log.info("App started!"); 
 });
 
  


 

  
   