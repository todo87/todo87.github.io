var mainApp = angular.module("mainApp", []);

mainApp.controller("controller", function($scope,$http) {
  $scope.object;

  $http.get('script/object.json').success(function(resp) {
    $scope.object = resp;
  });
debugger;
});
