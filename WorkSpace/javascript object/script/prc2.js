function prog1()
{
function employee(fname1,lname1,age1,gender1)
{
	this.fname=fname1;
	this.lname=lname1;
	this.age=age1;
	this.gender=gender1;
}
var employee1=new employee("pinkal","patel",26,"Hanoverpark");
var employee2=new employee("pritesh","patel",26,"Hanoverpark");
var employee3= new employee("lila","patel",54,"glendaleheight");

alert(employee1.fname);
alert(employee1.lname);
alert(employee1.age);
alert(employee1.gender);
}

function prog2()
{
	function stud(snm1,sln1,std1)
	{
		this.sname=snm1;
		this.lname=sln1;
		this.std=std1;
	}
	var stud1=new stud("jolly","daiya",12);

	//alert(stud1.sname);
	//alert(stud1.lname);
	//alert(stud1.std);
	for (x in stud1)
	{
		document.write(stud1[x]);
	}

}

function prog3()
{
	function country(state1,city1,village1)
	{
		this.state=state1;
		this.city=city1;
		this.village=village1;
		this.sc=function()	
			{
				alert(this.state+" "+this.city);
			}
	}
	var data1=new country("India","Anand","Navli");

	data1.sc();
}
function prog4()
{
	function count(a,b,c)
	{
		this.add= function()
		{
			alert(a+b+c);
		}
		this.sub= function()
		{
			alert(a-b-c);
		}
		this.mul= function()
		{
			alert(a*b*c);
		}
	}
	var result1= new count(10,2,4);
	result1.add();
	result1.sub();
	result1.mul();
}
function prog5()
{
	function car(name,year,color)
	{
		this.name=name;
		this.year=year;
		this.color=color;
	}
	var vehicle1= new car("Hundai",2016,"Grey");
	vehicle1.size="compact";

	for (x in vehicle1)
	{
		document.write(vehicle1[x]);
	}
	var vehicle2= new car("Honda",2017,"red");
	vehicle2.weight="800kg";

	for (x in vehicle2)
	{
		document.write(vehicle2[x]);
	}
}
function prog6() //function expression
{
	var funexp = function()
	{
		alert("hello");
	}
	funexp();
}