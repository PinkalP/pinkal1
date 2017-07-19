function prog1()
{
	function outter()
	{
		var x=6
		function inner()
	{
		return x;
	}
		return inner;
	}
	var result= outter();
	alert (result());
}

function prog2() //closure
{
	function accept(username)
	{
		return function(password)
				{
					alert("username"+ username +"Match password"+ password);
				};
	}
	var myaccount = accept("pinkal")
	myaccount("1234")
}


