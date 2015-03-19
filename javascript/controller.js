(function() {
  'use strict';

  /* Controllers */

  var jobsApp = angular.module('angularApp', []);
  var api = 'https://hiring-proto.herokuapp.com/api/jobs';

  jobsApp.controller('JobsListCtrl', function ($scope, $http) {
    $http.get(api).success(function(data) {

      // Data contains ajax response from API
      $scope.jobs = data;

      data.forEach(function(job) {

      });

    });
  });
})();
