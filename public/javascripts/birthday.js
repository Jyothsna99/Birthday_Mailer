var app = angular.module('birthdayApp', []);
app.controller('birthdayController', function($scope,$http){

  $scope.sendmail = function(birth){
  	console.log('hi');
    $http({
      method : 'POST',
      url : '/postbirthday',
      data : $scope.birth
    }).then(function success(response){
    	alert('Email Sent');
    }, function error(response){
    	alert('Failed, Please try again');
    })
  }

})