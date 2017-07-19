var app= angular.module("myapp",[]);

app.controller("myctr",function($scope,$http,$log,$interval)
{
	$http.get("guitardata.json").then(function(response)
	{
		$scope.users=response.data;
	}, 
	function(reason){
		$scope.errMessage=reason;
	});

	$log.info("going to start service");
	$log.info("Data Retriving");
	$log.info("service request completed");

	var show= function()
		{
			console.log("Helloooooo....");
		}
		$interval(show,3000);
	});


