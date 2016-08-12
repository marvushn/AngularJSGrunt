/**
 * Created by avishnikin on 8/9/2016.
 */
'use strict';

// Define the `departmentStaff` module
angular.module('awesome-app.staff')
    .controller('staffCtrl', function ($scope,$http) {
        var self = this;
        // = 'source/staff.json';
    $http.get('source/staff.json').then(function(response) {
        $scope.employees = response.data;
    });
        /*$http.get('source/staff.json').success(function(data,status) {
            $scope.status = status;
            $scope.employees = data;
            //$scope.
        }).
        error(function(data,status) {
            $scope.employees = data || "Request failed";
            $scope.status = status;
        });*/

});


