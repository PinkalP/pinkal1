var app=angular.module("myapp",['ngRoute','ngResource']);

app.config(function($routeProvider,$locationProvider){

 $routeProvider
 .when('/allEvents',{
 	templateUrl:"Allevents.html",
 	controller:"eventcontroller"
 });

 $routeProvider.when('/allEvent',{
 	templateUrl:"alleventsnew.html",
 	controller:"eventcontroller"
 });
  
  
});