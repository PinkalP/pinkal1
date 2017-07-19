function prog1()
{
	function show()
	{
		return 1;
	}
	var result=show();
	alert(result);
}
function prog2() // returning function addition
{
	function add(a,b)
	{
		return a+b;
	}
	 var addition=add(6,3);
	 alert(addition);
}
function prog3() // returning function with function expression
{
	var result=function add(a,b)
	{
		return a+b;
	};
	alert(result(6,5));
}
function prog4() // variable which is holding function it can be passed into another function
{
	var result=function()
	{
		alert("Welcome to my page");
	};

	function greet( message)
	{
		message();
	}
	greet(result);

}

function prog5() // pasing function expression as an parameter
{
	var num=[1,2,3,4,5]
	var result=num.map(function(elearr) // passing function as parameter
						{
							return elearr*2;
						}
						);
	for (x in result)
	{
		document.write(result[x]);
	}
}
function prog6() //
{
	function check ()
	{
		var a= prompt("Enter value");
		a=parseInt(a);
		if (a%2 ==0)
		{
		return function()
				{
					alert("Even Number")
				};
		}
		else
		{
		return function()
				{
					alert("Odd Number");
				};
		}
	}
		check()();
}