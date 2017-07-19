function prog1()  
{
	function show()
	{
		function get()
		{
			return 7;
		}
		return get();
		function get()
		{
			return 12;
		}
	}
	console.log(show());
}
function prog2()
{
	function show()
	{
		var res=function get()
		{
			return 7;
		}
		return res();
		var res=function get()
		{
			return 12;
		}
	}
	console.log(show());
}