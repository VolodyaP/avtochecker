/**
 * Created by Volodimir on 13.11.2015.
 */
"use strict";
var CheckAuto = angular.module('CheckAuto', ['ngRoute']);

CheckAuto.config(['$routeProvider','$locationProvider',function($routeProvide,$locationProvider){
    //$locationProvider.html5Mode({
    //    enabled: true,
    //    requireBase: true
    //});
    $routeProvide
        .when('/',{
            templateUrl: 'template/home.html',
            controller: 'HomeCtrl'
        })
        .when('/about',{
            templateUrl: 'template/about.html',
            controller: 'AboutCtrl'
        })
        .when('/contact',{
            templateUrl: 'template/contact.html',
            controller: 'ContactCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

CheckAuto.controller('HomeCtrl', function($scope){
    $scope.text = 'Введіть VIN';
    $scope.list = [];
    $scope.submit = function(){
        if($scope.text){
            $scope.list.push(this.text);
        }
    };
});

CheckAuto.controller('AboutCtrl', function($scope){

});

CheckAuto.controller('ContactCtrl', function($scope,$http){

    $scope.submit = function(){
    var feedback = {
        email: $scope.email,
        text: $scope.text
    };
        //sendMailByAPI(feedback,$http);
        sendMail(feedback);
    }
});

