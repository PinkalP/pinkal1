/*addition*/
/*var x=5;
var y=2;
var z=x+y;
(z);*/
/*multiplication*/
/*var x=5;
var y=2;
var z=x*y;
alert(z);*/
/*divid*/
/*var x=5;
var y=2;
var z=x/y;
alert(z);*/
/*modulous*/
/*var x=5;
var y=2;
var z=x%y;
alert(z);*/
/*subtraction*/
/*var x=5;
var y=2;
var z=x-y;
alert(z);*/

var golobal1=10;
var golobal2=4;
var add= "1875 windmill dr";
var add2=" hanoverpark";
function myfunction()
{
	var myfirstvariable= 22;
	var mynextvariable= "a";
	document.write(myfirstvariable + mynextvariable);
}
function fname()
{
	var Firstname= "pinkal";
	var lastname= "patel";
	document.write(Firstname + lastname);
}
function subtraction()
{
	var num1= 10;
	var num2= 5;
	document.write(num1 - num2);
}
function divid()
{
	var num1= 10;
	var num2= 5;
	document.write(num1 / num2);
}
function multiplication()
{
	var num1= 10;
	var num2= 5;
	document.write(num1 / num2);
}
function addition()
{
		document.write(golobal1 - golobal2);
}
/*function address()
{
	document.write (add + add2);
}*/
/*function time()
{
	document.time();
}*/
function sayHello(name, age)
{
    document.write (name + " is " + age + " years old.");
}
function printlocation(city)
{
	var country = "USA";
	document.write ("you are in" + city + "," + country);
}
function mouseover()
{
	document.write("mouseover");
}
function mouseload()
{
	document.write("mouseload");
}

/*closures function with global variable, local variable, parent variable*/
/*child function can use parent variable, global variable and child variable*/
/*parent cant access child function variable*/
	function closures(){
	var fname="pinkal";
	var lname ="patel";
	function addre(){
		/*var sex= female;*/
		/*document.write(fname +lname +add );*/
	}
	document.write(fname +lname +add +add2);
	/*addre();*/
	}

	var city="chicago"; /*global variable*/
	var state="IL";		/*global variable*/

	function car()
	{ /*parent function*/
	var carname="Honda"; /*parent function variable*/
	var carsize="compact";
	function location()
	{ /*child function*/
		 /*child function variable*/
		document.write(carname + city +carsize);
	}
	location(); /*calling child function*/
	}
/*parameters*/

function parameters(a,b)
{
	alert(a + b);
}
parameters(10,2);

/*parameters with function*/
var x=10;
function para1(a,b)
{
	var c=10;
	function para2(d)
	{
		document.write(a+b+x);
		
	}
para2(5);
}
/*parameters with function*/
/*var f = 10;
*/

function pOne(p,q)
{
	var z=8;
	function p2()
	{
		document.write(p+q+z);
	
	}
    p2();	
}

var z=5;
function ptwo(a,b)
{
	var l=2;
	function p2(s)
	{
		document.write(z+a+b+s)
	}77
	p2(4);
}

