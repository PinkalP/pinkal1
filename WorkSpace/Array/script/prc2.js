function prog1() // shift method (its remove first element)
{
	var names=['pinkal','guru','diya'];
	alert(names.shift());
}

function prog2()
{
	var city=['amd','bod','mp'];
	var remove= city.shift();
	alert (remove);

	for (x in city)
	{
		alert(city[x]);
	}
	
}
function prog3() //unshift method (add element at beggining)
{
	var names=['pinkal','patel']
	names.unshift("Pritesh");
	alert (names.length);

	for(x in names)
	{
		alert(names[x]);
	}
}
function prog4() //delete method its keep same length of array
{
	var airport=['amd','avp','bdq']
	delete airport[1];
	alert (airport.length);
	for (x in airport) 
	{
		alert(airport[x]);
	}
}

function prog5() //splice it can be used to add 
{
	var city=['amd', 'bdq','jfk','avp'];
	city.splice(2,1,'abc','def');
	alert (city.length);
	for (x in city) 
	{
		alert(city[x]);
	}
}
function prog6() //merging array
{
	var arr1=['pinkal','patel'];
	var arr2=['Pritesh','patel'];
	var arr3=['diya', 'patel'];

	var concatarr= arr1.concat(arr2,arr3);
	alert (concatarr.length);
	for (x in concatarr) 
	{
		alert(concatarr[x]);
	}
}

function prog7() //slice method
{
	var arr1=['pinkal', 'patel','Pritesh','patel'];
	var store= arr1.slice(1,3);

	
	alert (store.length);
	for (x in store) 
	{
		alert(store[x]);
	}
}