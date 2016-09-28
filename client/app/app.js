'use strict'

const app = angular.module('clownDate', ['ngRoute'])

app.controller('WelcomeCtrl', ['$scope', function($scope) {
  $scope.title = 'Hello from Angular'
}])
