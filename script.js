var app = angular
        .module("myModule", [])
        .controller("myController", function($scope, $http) {

              $http.get("name.json")
  .then(function(response) {
      $scope.employees = response.data;
  });
                $http.get("salary.json")
  .then(function(response) {
      $scope.salaries = response.data;
  });

        });