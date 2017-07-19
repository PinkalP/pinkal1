function prog1()
{
var cars={
	color:"red",
	Company:"Honda", 
	Price:"$25000", 
	doors:2, 
	model:"civic-2017",
	show: function()
		{
			alert("Hello");
		}
};
alert(cars.color);
alert(cars.Company);
alert(cars.Price);
alert(cars.doors);
alert(cars.model);
cars.show();
}


function prog2()
{
	var country={
	state:"gujarat",
	city:"anand",
	village:"navli",
};
alert(country["state"]);
alert(country["city"]);
alert(country["village"]);
}

function prog3() // adding new property of object and edit value of exiting property
{
	var stud={
		fname:"Diya",
		lname:"patel",
		std:8,
	};
	stud.middlename="jigar";
	stud.std=9;

	alert(stud.fname);
	alert(stud.lname);
	alert(stud.std);
	alert(stud.middlename);
}

function prog4() //making object using new keyword
{
	/*var str= new String("Hello");
	alert(str);*/

	var str= new String();
	str="Hello";
	alert(str);
}

function prog5() // use of date object
{
	var a= new Date();
	document.write(a);
}



