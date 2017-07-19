var app= angular.module("myapp");
app.controller("myctr",function($scope,mycache,$parse)
{
	$scope.addtocache=function(key,value)
	{
		return mycache.put(key,value);
	};
	$scope.readfromcache=function(key,value)
	{
		return mycache.get(key);
	};
	$scope.getcachestats=function()
	{
		return mycache.info();
	};

	var res=$parse('1+2');
	console.log(res());
});