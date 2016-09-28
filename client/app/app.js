'use strict'

const app = angular.module('clownDate', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'WelcomeCtrl',
      templateUrl: '/app/partials/home.html'
    })
}])

app.controller('WelcomeCtrl', ['$scope', function($scope) {
  $scope.title = 'Down to Clown'
}])
