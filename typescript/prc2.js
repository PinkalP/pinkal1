var num1 = 6;
var num2 = 2;
var num3 = 4;
var total;
function mul() {
    total = num1 * num2 * num3;
}
mul();
console.log(total);
function sum() {
    var num4 = 6;
    var num5 = 9;
    total = num1 + num2 + num3 + num4 + num5;
}
sum();
console.log(total);
// BITWISE OPERATORS.......................................................................................
var a = 2;
var b = 3;
console.log(a | b);
console.log(a & b);
console.log(a ^ b);
console.log(a << 2); //left shift.................................................................................
console.log(a >> 1); //right shift................................................................................
var a = 2; //negation operation...........................................................................
var b = -a;
console.log(a);
console.log(b);
//conditional operation.....................................................................................
var a = 3;
var value = a > 2 ? "a is larger" : "a is smaller";
console.log(value);
// function
//optional parameters
function hey(x, y) {
    console.log(x);
    console.log(y);
}
hey(5);
hey(6, 5);
//passing array as an parameters as a function
function hi() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    for (var i = 0; i < x.length; i++) {
        console.log(x[i]);
    }
}
hi("ABC", "DEF", "GHI");
var res = function (a, b) {
    return a * a + b * b;
};
console.log(res(2, 4));
var frd = function () { return console.log("hello"); };
frd();
var sam = function () { return console.log("hello"); };
sam();
var x;
{
    x = function () { return "hello"; };
    console.log(x());
}
