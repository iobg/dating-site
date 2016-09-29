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
    .when('/register', {
      controller: 'RegCtrl',
      templateUrl: '/app/partials/register.html'
    })
    .when('/logout', {
      controller: 'LogoutCtrl',
      templateUrl: '/app/partials/logout.html'
    })
}])

app.controller('WelcomeCtrl', ['$scope', function($scope) {
  $scope.title = 'Are you down to Clown?'
  $scope.user = false
}])

app.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.title = 'Home page contrller'
  $scope.user = true
  $scope.logout = () => console.log('hello')
}])

app.controller('ProfileCtrl', ['$scope', function($scope) {
  $scope.title = 'Profile page contrller'
  $scope.user = true
}])

app.controller('LoginCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.login = () => {
    let userLoginObj = {
      email: $scope.email,
      password: $scope.password
    }
    $http.post('/api/login', userLoginObj)
      .then(data => $location.url('/home'))
      .catch(console.error)
  }
}])

app.controller('LogoutCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.logout = () => {
    $http
    .post('/api/logout')
    .then(() => $location.url('/'))
    .catch(console.error)
  }
}])

app.controller('RegCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.regNewUser = () => {
    let newUserObject = {
      email: $scope.email,
      password: $scope.password,
      confirmation: $scope.confirmation
    }

    $http.post('/api/register', newUserObject)
      .then(data => $location.url('/login'))
      .catch(console.error)
  }
}])
