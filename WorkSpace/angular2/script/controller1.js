var app= angular.module("myapp");

app.controller("myctr",function($scope,$http)
{
	$http.get("script/1.json").then(function(response)
	{
		$scope.users=response.data;
	}, 
	function(reason)
	{
		$scope.errMessage=reason;
	});
});