mainApp.controller("controller", function($scope,$http,$sce,get) {

  $scope.personalData = {};
  $scope.education = {};
  $scope.proExp = {};
  $scope.skillMatrixHead = ["Category", "Item", "No. of years", "Last year used", "Skill level", "Remarks (versions used, certifications, other remarks)"];
  $scope.matrix = {};
  $scope.os = [{}];
  
  get.async('personalData.json').then(function(d) {
    $scope.personalData = angular.fromJson(d);
  });

  get.async('education.json').then(function(d) {
    $scope.education = angular.fromJson(d);
  });
  
  get.async('proExp.json').then(function(d) {
    $scope.proExp = angular.fromJson(d);
  });
  
  get.async('matrix.json').then(function(d) {
    $scope.matrix = angular.fromJson(d);
  });

  $scope.isArray = function(obj){
    return angular.isArray(obj);
  }
  
  $scope.isObject = function(obj){
    return angular.isObject(obj);
  }

  $scope.getKeys = function(obj){
	var retVal = [];
	if(obj != null || obj != undefined){
		retVal = Object.keys(obj);
	}	 
    return retVal;
  }

});
