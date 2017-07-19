var message:string="hello";
console.log(message);

var num1: number=9;
var num2: number=10;
var num3=num1 + num2;
console.log(num3);

var str;
str = "hello";
str=9;

// var arr:string[]=["abc","def","ghi"];
// for (var i=0; i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

var arra:number[]=new Array(4);
arra=[1,2,3,4];
var sum:number=0;
for(var i=0;i < arra.length;i++)
{
    sum = sum + arra[i];
}
console.log(sum);

var add:number|string|string[];
add=9;
console.log(add);
add="hello";
console.log(add);
