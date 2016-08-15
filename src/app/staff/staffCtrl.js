/**
 * Created by avishnikin on 8/9/2016.
 */
'use strict';

// Define the `departmentStaff` module
angular.module('awesome-app.staff')
    .controller('staffCtrl', function ($scope,$http) {

        var self = this;
        self.orderProp = 'age';
        
        //get all templayers from the json source
        $http.get('src/staff.json').success(function(data,status) {
            $scope.status = status;
            $scope.employees = data;
        }).
        error(function(data,status) {
            $scope.employees = data || "Request failed";
            $scope.status = status;
        });
        //get all groups from the json source
        $http.get('src/teams.json').success(function(data,status) {
            $scope.status = status;
            $scope.teams = data;
        }).
        error(function(data,status) {
            $scope.teams = data || "Request failed";
            $scope.status = status;
        });

        // Add a Item to the list
        $scope.add = function () {

            $scope.teams.push({
                teamname : $scope.teamname
            });
            // Clear input fields after push
            $scope.itemAmount = "";
        };
        $scope.submit = function() {
            if ($scope.text) {
                $scope.teams.push(this.text);
                $scope.text = '';
            }
        };
        
    });



