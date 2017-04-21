var app = angular.module('App', [])
.controller('app', function($scope, $http) {
  $scope.window = window;
  $http({
    method: 'GET',
    url: 'listing.json'
  }).then(function successCallback(response) {
      var r = response.data;
      $scope.title = r.title;
      $scope.description = r.description;
      $scope.pages = r.pages;
    }, function errorCallback(response) {
      alert("Error getting JSON\n" + response)
    });
});
