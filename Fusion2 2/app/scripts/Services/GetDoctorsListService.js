"use strict";

App.service('GetDoctorsListService', ['$http', function($http){
	
	this.doctorsListApi = "data/doctors.json";

	this.getDoctorsList = function(){

		var doctorsListPromise = $http.get(this.doctorsListApi);

		//console.log(doctorsListPromise);

		return doctorsListPromise;

	}

}])