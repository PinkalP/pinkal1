function show()
{
	var result= document.getElementById("fnm").value;
	document.getElementById("lnm").value=result;
	document.getElementById("fnm").value="";

}

function swap()
{
	var one= document.getElementById("n1").value;
	var two=document.getElementById("n2").value;
	var three=document.getElementById("n3").value;

	document.getElementById("n1").value=three;
	document.getElementById("n2").value=one;
	document.getElementById("n3").value=two;
}

function Paragraph()
{
	var para= document.getElementById("Paragraph1").value;
	document.getElementById("p1").innerHTML=para;
}

function para2()
{
	var p2= document.getElementById("pa1").innerHTML;
	//document.getElementById("pa1").innerHTML=p2;
	alert(p2);
}

function Check()
{
	var result= document.getElementById("fname").value;
	if (result.match (/[0-9]/gi)) 
	{
		alert("Enter Invalid Name")
	}

}