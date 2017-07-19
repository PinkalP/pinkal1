
function prog1()
{
var fruites =["apple","banana","orange","grapes","almond"];
alert (fruites.length);
alert (fruites[0]);
alert (fruites[1]);
alert (fruites[2]);
//alert (fruites[3]);
alert (fruites[4]);
fruites[3]="chikoo"; //change the element
alert(fruites[3]);
}

// array using in loop
function prog2()
{
var car=['volvo','BMW','honda'];
for (i=0; i< car.length; i++)
{

	alert(car[i]);
}
}

//array using for...in
function prog3()
{
	var country=['india','Usa','AUS'];
	for(x in country)
	{
		alert(country[x]);
	}

}

function prog4() // array using push method
{
	var airport=['ORD','AVP','MDW']
	alert(airport.length);
	alert(airport[0]);
	alert(airport[1]);
	alert(airport[2]);

	airport.push('AMD');
	alert(airport[3]);
}

function prog5() //array using pop method
{
	var city=['anand','baroda','nadiad'];
	alert(city.length);
	alert(city[0]);
	alert(city[1]);
	alert(city[2]);

	city.pop();
	console.log(city);

}
function prog6() //to string method
{
	var village=['navli','bhaily','gamdi'];
	alert(village.toString());

}
function prog7() //join method
{
	var village=['navli','bhaily','gamdi'];
	alert(village.join("*"));
}

function prog8()
{
	var names=['pinkal','guru','diya'];
	alert(names.shift());
}