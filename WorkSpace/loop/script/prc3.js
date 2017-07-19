/*WHILE LOOP*/
/*WRITE A PROGRAM PRING NUMBER 21 TO 51*/
/*function whileloop() {
	var i=21;
		while(i<=51)
		{
			console.log(i);
			i++;
		}
}
*/

/*do- while loop*/
/*WRITE A PROGRAM PRING NUMBER 21 TO 51 using do- whileloop*/
 /*function whileloop() {
 var i=21;
 do
 {
 	console.log(i);
 	i++;
 }
 while(i<=51);
}*/

/*Program 1 print  number 1 to 10*/

function prog1()
{
	for(i=1;i<=10;i++)
	{
		console.log(i);
	}
}

/*program 2 print no 10 to 1*/
function prog2()
{
	for(i=10;i>0;i--)
	{
		console.log(i);
	}
}
/*program 9If the value is entered ‘123’, alert should be ‘One Two Three’
If the value is entered ‘124’, alert should be ‘One Two Four’
If the value is entered ‘125’, alert should be ‘One Two Five’
If the value is entered ‘126’, alert should be ‘One Two Six’
If the value is entered ‘127’, alert should be ‘One Two Seven’*/

function prog8()
{
	var n= prompt("Enter value");
	n=parseInt(n);

	if (n==124)
	 {
	 	document.write("one two four");
	 }
	 else if (n==125)
	  {
	  	document.write("one two five");
	  }
	  else if (n==126)
	  {
	  	document.write("one two six");
	  }
	  else if (n==127)
	  {
	  	document.write("one two seven");
	  }
	  else if (n==128)
	  {
	  	document.write("one two eight");
	  }
}

/* Prog: 9 If I enter ‘1’, alert should be ‘One’
If I enter ‘2’, alert should be ‘Two’
If I enter ‘3’, alert should be ‘Three’
If I enter ‘4’, alert should be ‘Four’
If I enter ‘5’, alert should be ‘Five’
Else, please enter a valid number.*/
function prog9()
{

	var n= prompt("Enter value");
	n=parseInt(n);

	if (n==1)
	 {
	 	document.write("one");
	 }
	 else if (n==2)
	  {
	  	document.write("two");
	  }
	  else if (n==3)
	  {
	  	document.write("Three");
	  }
	  else if (n==4)
	  {
	  	document.write("Four");
	  }
	  else if (n==5)
	  {
	  	document.write("Five");
	  }
}
/*If I enter a number between 1 to 10, it should alert, the number is between ‘1 and 10’
If I enter a number between 11 to 20, it should alert, the number is between ‘11 and 20’
If I enter a number between 21 to 30, it should alert, the number is between ‘21 and 30’
If I enter a number between 31 to 40, it should alert, the number is between ‘31 and 40’
If I enter a number between 41 to 50, it should alert, the number is between ‘41 and 50’*/

function prog10()
{
	var n= prompt("Enter value");
	n=parseInt(n);

	if (n>=1 && n<=10)
	 {
	 	document.write("number is between 1 and 10");
	 }
	 else if (n>=11 && n<=20)
	  {
	  	document.write("number is between 11 and 20");
	  }
	  else if (n>=21 && n<=30)
	  {
	  	document.write("the number is between 21 and 30");
	  }
	  else if (n>=31 && n<=40)
	  {
	  	document.write("the number is between 31 and 40");
	  }
	  else if (n>=41 && n<=50)
	  {
	  	document.write("the number is between 41 and 50’");
	  }

}
/*14. If I enter an even number, I want next 10 even numbers to be printed. If I enter an odd number, I
want next 10 odd numbers to be printed.*/

function prog14()
{
	var n= prompt("Enter Even No");
	n=parseInt(n);
	
		for( var i=n+2;i<=n+10;i=i+2)
		{
		console.log(i);
		}
	
}

/*If I enter an even number, I want previous 5 even numbers to be printed. If I enter an odd number, I

want previous 5 odd numbers to be printed.*/

function prog15()
{
	var n= prompt("Enter Even No");
	n=parseInt(n);
	
		for( var i=n-2;i>=n-10;i=i-2)
		{
		console.log(i);
		}
	
}
