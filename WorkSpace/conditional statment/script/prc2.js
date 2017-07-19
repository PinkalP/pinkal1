function Passenger()
{
	var age= prompt("enter age");
	age= parseInt(age);
	 if (age<2) 
	 {
	 	alert("No Discount");
	 }
	 else if (age>2 && age<14)
	  {
	  	alert("10% Discount");
	 }
	 else if (age>14 && age<55)
	  {
	  	alert("Regular Price");
	  }
	  else if (age>55 && age<90) 
	  {
	  	alert("20% Discount");
	  }
	  else if (age==90)
	  {
	  	alert("50% Discount");
	  }
}