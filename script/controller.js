mainApp.controller("controller", function($scope,$http,get) {

  $scope.personalData = null;
  $scope.personalDataKeys = null;

  get.async('personalData.json').then(function(d) {
    $scope.personalData = d;
    $scope.personalDataKeys = Object.keys(d);
  });

  // $http.get('script/personalData.json').success(function(resp) {
  //   $scope.object = resp;
  //   console.log("log response");
  //   console.log(resp);
  // });

});
