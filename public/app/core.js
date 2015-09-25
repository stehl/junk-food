var junkFood = angular.module('junkFood', []);

function mainController($scope, $http){
	$scope.formData = {};

	$http.get('/api/burger')
		.success(function(data){
			$scope.burgers = data;
			console.log(data);
		})
		.error(function(data){
			console.log('Error : '+ data);
		});

	$scope.createBurger = function(){
		$http.post('/api/burger', $scope.formData)
			.success(function(data){
				$scope.formData = {};
				$scope.burgers = data;
				console.log(data);
			})
			.error(function(data){
				console.log('Error : '+ data);
			});
	}

	$scope.deleteBurger = function(id){
		$http.delete('/api/burger'+id)
			.success(function(data){
				$scope.burgers = data;
				console.log(data);
			})
			.error(function(data){
				console.log('Error : '+ data);
			});
	}
}