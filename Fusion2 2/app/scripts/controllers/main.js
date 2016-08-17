'use strict';

var App = angular.module('zenfitsApp')
    .controller('MainCtrl', ['$scope', 'GetDoctorsListService', '$http', '$filter', function($scope, GetDoctorsListService, $http, $filter) {

        //Get doctors list from Promise Service
        var doctorsList = GetDoctorsListService.getDoctorsList();

        //Array to contain the list form promise
        $scope.doctors = [];

        //Promise success function
        $scope.success = function(response) {
            $scope.data = response.data.data2;
            // Copy data from promise array to a global array $scope.doctors
            for (var i = 0; i < $scope.data.length; i++) {
                $scope.doctors.push($scope.data[i]);
            }
            return $scope.doctors;
        };

        //Promise Error function
        $scope.failure = function(error) {
            console.log(error);
        };

        //Promise
        doctorsList.then($scope.success, $scope.failure);


        //Function for filtering the display
        $scope.specificDoctors = function(fact) {
            console.log(fact);
            $scope.special = [];
            //Temoerory array to contain the data accordingly to the passed parameters
            for (var key in $scope.doctors) {
                if ($scope.doctors[key].speciality == fact) { // Matching with Speciality
                    $scope.special.push($scope.doctors[key]);
                } else if ($scope.doctors[key].study == fact) { // Matching with Study ...not implemented
                    $scope.special.push($scope.doctors[key]);
                } else if ($scope.doctors[key].area == fact) { // Matching with Area
                    $scope.special.push($scope.doctors[key]);
                }
            }
            //Ordering with selected score or ratings
            $scope.special = $filter('orderBy')($scope.special, '-score');

            return $scope.special;
        };



    }]);
