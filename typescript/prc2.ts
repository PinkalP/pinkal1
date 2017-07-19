var num1: number=6;
var num2: number=2;
var num3: number=4;
var total:number;
function mul()
{
   total=num1*num2*num3;
}
mul();
console.log(total);

function sum()
{
    var num4: number=6;
    var num5: number=9;
    total=num1+num2+num3+num4+num5;
}
sum();
console.log(total);


// BITWISE OPERATORS.......................................................................................
var a: number=2
var b: number=3

console.log(a|b);
console.log(a&b);
console.log(a^b);
console.log(a<<2); //left shift.................................................................................
console.log(a>>1); //right shift................................................................................

var a: number=2 //negation operation...........................................................................
var b: number=-a
console.log(a);
console.log(b);

//conditional operation.....................................................................................
var a:number=3;
var value=a>2?"a is larger":"a is smaller";
console.log(value);
// function
//optional parameters
function hey(x:number,y?:number)
{
    console.log(x);
    console.log(y);
}
hey(5);
hey(6,5);

//passing array as an parameters as a function
function hi(...x:string[]) :void
{
    for(var i=0;i<x.length;i++)
    {
    console.log(x[i]);
    }
}
hi("ABC","DEF","GHI");

var res=(a:number,b:number)=>
{
    return a*a+b*b;

};
console.log(res(2,4));

var frd=()=>console.log("hello");
frd();

var sam=():void=>console.log("hello");
sam();

var x:()=>string;
{
x=():string=>{return "hello";}
console.log(x());
}