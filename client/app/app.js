'use strict'

const app = angular.module('clownDate', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'WelcomeCtrl',
      templateUrl: '/app/partials/welcome.html'
    })
    .when('/home', {
      controller: 'HomeCtrl',
      templateUrl: '/app/partials/home.html'
    })
    .when('/login', {
      controller: 'LoginCtrl',
      templateUrl: '/app/partials/login.html'
    })
    .when('/profile', {
      controller: 'ProfileCtrl',
      templateUrl: '/app/partials/profile.html'
    })
}])

app.controller('WelcomeCtrl', ['$scope', function($scope) {
  $scope.title = 'Are you down to Clown?'
  $scope.user = false
}])

app.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.title = 'Home page contrller'
  $scope.user = false
}])

app.controller('LoginCtrl', ['$scope', function($scope) {
  $scope.title = 'Login page contrller'
  $scope.user = true
}])

app.controller('ProfileCtrl', ['$scope', function($scope) {
  $scope.title = 'Profile page contrller'
  $scope.user = true
}])
