function prog1()
{
	for( var i =0; i<=3;i++)
	{
		for( var j =0; j<=4;j++)
		{
			document.write("*");
		}
		document.write("<br/>");
	}
}

function prog2()
{
	for(var i=0; i>=1;i++)
	{
		for( var j=0;j<=i;j++)
		{
			document.write("*");
		}
		document.write("<br/>");
	}
	
}

function prog3()
{
	for (var i=5; i>=0;i--)
	{
		for( var j=0;j<=i;j++)
		{
			document.write("*");
		}
		document.write("<br/>");
    }
}

function prog4()
{
	for (var i=0; i<=6;i++)
	{
		for (var j=1;j<=i;j++)
		{
			document.write("0" + j);
			document.write(" ");
		}
			document.write("<br/>");
	}
}

// prompt the user to the amount if the amount is between $200-$300 give discount 25% print discounted value.
//if the amount is between $301-$400 give discount 20% print discounted value.
//if the amount is between $401-$500 give discount 30% print discounted value.
//if the amount is between $501-$600 give discount 50% print discounted value.
function prog5()
{
	var amt = prompt("Enter Valid amount")
	amt= parseInt(amt)

	if(amt>=200 && amt<=300)
	{
		amt=amt-(amt*25)/100;
		document.write(amt);
	}
	else if(amt>=301 && amt<=400)
	{
		amt=amt-(amt*20)/100;
		document.write(amt);
	}
	else if(amt>=401 && amt<=500)
	{
		amt=amt-(amt*30)/100;
		document.write(amt);
	}
	else if(amt>=501 && amt<=600)
	{
		amt=amt-(amt*50)/100;
		document.write(amt);
	}
}

function prog6()
{
	var n= prompt("Enter No Of Row:");
	n= parseInt(n);

	for( var i =1; i<=n;i++)
	{
		for( var j =1; j<=i;j++)
		{
			document.write("*");
		}
		document.write("<br/>");
	}

}


function custInfo(name)
{
	document.write ("The Name of customer is "+ name);
}

function show()
{
custInfo("protek");
custInfo("consulting");
}

function displayinfo(name, i)
{
	document.write(name +" " +"is being displayed" +" "+ i +" "+ "times");
}
function show2()
{
	displayinfo("wayne", 2);
	document.write("<br/>");
	custInfo("Wayne");
	document.write("<br/>");
	displayinfo("protek", 4);
}
var a;
function abc()
{
	a=10;
}
abc();
alert(a);