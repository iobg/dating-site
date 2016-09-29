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

app.controller('WelcomeCtrl', ['$scope', 'UserService', function($scope, UserService) {
  $scope.title = 'Are you down to Clown?'
  $scope.userState = UserService.getUserState()
  $scope.user = UserService.getUserObj()
}])

app.controller('HomeCtrl', ['$scope', 'UserService', function($scope, UserService) {
  $scope.title = 'Home page contrller'
  $scope.userState = UserService.getUserState()
  $scope.user = UserService.getUserObj()
}])

app.controller('ProfileCtrl', ['$scope', 'UserService', function($scope, UserService) {
  $scope.title = 'Profile page contrller'
  $scope.userState = UserService.getUserState()
  $scope.user = UserService.getUserObj()
}])

app.controller('LoginCtrl', ['$scope', 'UserService', function($scope, UserService) {
  $scope.login = () => {
    let userLoginObj = {
      email: $scope.email,
      password: $scope.password
    }
    UserService.login(userLoginObj)
  }
}])

app.controller('LogoutCtrl', ['$scope', 'UserService', function($scope, UserService) {
  $scope.logout = () => {
    UserService.logout()
  }
}])

app.controller('RegCtrl', ['$scope', 'UserService', function($scope, UserService) {
  $scope.regNewUser = () => {
    let newUserObject = {
      email: $scope.email,
      password: $scope.password,
      confirmation: $scope.confirmation
    }
    UserService.register(newUserObject)
  }
}])
