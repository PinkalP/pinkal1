var app= angular.module("myapp",[]);
app.factory("mycache",function($cacheFactory)
{
	return $cacheFactory('mycache',{capacity:3});
});