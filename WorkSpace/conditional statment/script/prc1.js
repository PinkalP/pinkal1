/*var grades= prompt("Enter Your Grads");

if (grades >= 90) 
{
	document.write("Grade:A");

}
else if (grades >= 80 && grades <90)
{
	document.write("Grade:B")
} 
else if (grades >= 70 && grades <80)
{
	document.write("Grade:c")
} 
else if (grades >= 50 && grades <70)
{
	document.write("Grade:E")
} 
else if (grades < 50)
{
	document.write("Grade:c")
} 
*/
/*write a program to prompt user for his age if age is equal to 14 alert "you are valid for coupen 1" if age is equal to 21 alert "you are valid for coupen 2"*/
/*if age is equal to 30 alert "you are valid for coupen 3" if age is equal to 50 alert "you are valid for coupen 4" elese "No coupen"*/

/*var age= prompt("Enter Your Age");
age = parseInt(age);
if (age==14) 
{
	document.write("You are Valid for Coupen 1");
}
else if (age==21 ) 
{
	document.write("You are Valid for Coupen 2");
}
else if (age==30) 
{
	document.write("You are Valid for Coupen 3");
}
else if(age==5)
{
	document.write("You are not Valid for coupen");
}*/

/*var day = prompt("Enter Day Of Week");
day = day.toLowerCase();
if (day=="monday")
{
	document.write("We serve Free Pizza");
}
else if (day=="tuesday")
{
	document.write("We serve Free Pasta");
}
else if (day=="wednesday")
{
	document.write("We serve Free drink");
}
else if (day=="thursday")
{
	document.write("20% off on all beverage");
}
else if (day=="friday")
{
	document.write("50% off on all drink");
}
else if (day=="satuarday")
{
	document.write("30% off ");
}
else if (day=="sunday")
{
	document.write("Sorry we are close!");
}*/


/*var a=5;
var b=4;
var c=3;

if (a>b)
 {
 	document.write("A is greater");
  }

 if (b>c) 
  {
  	document.write("B is greater");
  }
if (c>a) 
  {
  	document.write("B is greater");
  }  */

 /* switch condition*/
/*var age = prompt("Enter You Age:");
age = parseInt(age);
switch(age)
{
	case 14:
	{
		alert("coupen1");
	}
	break;
	case 21:
	{
		alert("coupen2");
	}
	break;
	default:
	{
		alert("Invalid");
	}
}*/

/*function week()
{
	var day = prompt("Enter Day Of Week");
	day = day.toLowerCase();

	switch(day)
	{
		case 'monday':
		{
			alert("We serve Free Pizza");
		}
		break;
		case 'tuesday':
		{
			alert("We serve Free Pasta");
		}
		break;
		case 'wednesday':
		{
			alert("We serve Free drink");
		}
		break;
		case 'thursday':
		{
			alert("20% off");
		}
		break;
		case 'friday':
		{
			alert("30% off");
		}
		break;
		case 'satuarday':
		{
			alert("10% off");
		}
		break;
		case 'sunday':
		{
			alert("sorry we are close");
		}
		break;
		default:
		{
		alert("Invalid Day");
		}
	}

}*/
function obama()
{
var country = prompt("Enter Your Country");
var gender = prompt("Enter Your gender");
var age = prompt("Enter Your age");
country = country.toLowerCase();
gender = gender.toLowerCase();
age= parseInt(age);

if (country =="usa"&& gender=="male" && age>=18)
 {
 	alert("You are Eligible for Obamacare");
 }
 else if (country =="usa"&& gender=="female" && age>=16)
 {
 	alert("You are Eligible for Obamacare");
 }
 else
 {
 	alert("You are noteligible");
 }
}
