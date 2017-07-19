function Check()
{
	var result= document.getElementById("fname").value;
	if (result.match (/[0-9]/gi)) 
	{
		alert("Enter Invalid Name")
	}

}

function no()
{
	var store= document.getElementById("n1").value;
	if(store.match(/[^0-9]/gi))
	{
		alert("Enter only number")
	}
}

function s()
{
	var st= document.getElementById("s1").value;
	if (st.match(/[a-z]/gi))
	 {
	 	alert("Use Entering string ")
	 }
	 else
	 {
	 	alert("User Entering number")
	 }
}

function show()
{
	console.log("Welcome");
}
/*setInterval(show, 3000);*/

function stop()
{
 setTimeout(show, 1000);
}


