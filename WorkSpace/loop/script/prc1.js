/*for (var i = 1;i <=10; i++) 
{
	alert("Hello" + i);
}

for(var a=1; a<20; a++)
{
	alert(a);
}
*/

/*var sum=0;
for (var b=1; b<21;b++)
{
	sum= sum+b;
}
alert(sum);*/

/*var mul =1
for (var i = 1; i<21; i++)
{
	mul= mul*i;
}
alert (mul);*/

/*var even=2
for (var i= 1; i<31; i=i+2)
{
	alert(i);
}*/

/*var even=2
for (var i= 2; i<31; i=i+2)
{
	alert(i);
}*/

<!-- /*write a program odd & even number between 1 to 30 using else if condition*/-->

/*for (var i= 1; i<31; i++)
{
	if (i%2==0) 
	{
		alert(i);
	}
	
}*/
<!-- /*write a program multiple by 3 and 5 between 1 to 50 */-->
/*for (var i= 1; i<50; i++)
{
	if (i%3==0 && i%5==0) 
	{
		alert(i);
	}
	
}*/

/*/*input from user they can also be loop inside the loop condition*/
/*1. user enter 1  print no 1-10
1. user enter 2  print no 2-20
3.user enter 3  print no 3-30*/
function number()
{
var num= prompt("Enter Your Number");
if (num==1) 
	{
		for (var i =1; i<11; i++)
		{
			console.log(i);
		}
		
	}
else if (num==2) 
	{
		for (var i =2; i<21; i++)
		{
			console.log(i);
		}
		
	}
else if (num==3) 
	{
		for (var i =3; i<31; i++)
		{
			console.log(i);
		}
		
	}
}
