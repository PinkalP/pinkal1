function prog1()
{
	var str="hello";
	function count(letter)
	{
		var lettercount=0;
		for(var i=0; i<str.length;i++)
		{
			if(str.charAt(i).toUpperCase()==letter.toUpperCase())
				lettercount++;
		}
		alert(lettercount);
	}
	count("l");
}

function prog2()
{
	String.prototype.count=function(letter)
							{
								var lettercount=0;
								for(var i=0;i< this.length;i++)
								{
									if (this.charAt(i).toUpperCase()==letter.toUpperCase()) 
										{
											lettercount++;
										}
										
								}
								alert(lettercount);
							}
					var first="hello i am here!";
					first.count("e");
					var second="hi this is pinkal";
					second.count("i");
}