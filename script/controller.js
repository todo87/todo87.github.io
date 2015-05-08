mainApp.controller("controller", function($scope,$http,$sce,get) {

  $scope.personalData = null;
  $scope.personalDataKeys = null;
  $scope.education = null;
  $scope.educationKeys = null;

  get.async('personalData.json').then(function(d) {
    $scope.personalData = angular.fromJson(d);
    $scope.personalDataKeys = Object.keys(d);
  });

  get.async('education.json').then(function(d) {
    $scope.education = d;
    $scope.educationKeys = Object.keys(d);
    $scope.education["Formal Qualifications"] = $sce.trustAsHtml(d["Formal Qualifications"]);

  });

});
