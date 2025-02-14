// There are two type data Type.

// 1. Primitive (call by value)

// String Boolean Number BigInt null undefined Symbol

// 2. non Primitive (call by Reference)

// Array Object Function

// Question Which type of language JavaScript static or dynamic

// JavaScript is dynamically typed, meaning variable types are determined at runtime rather than at compile time. You don’t need to explicitly define the type of a variable when declaring it.

// // *** 1. Primitive ***
// let age = 25;
// let price = 99.99;
// let name = "John Doe";
// let isLoggedIn = true;
// let hasPermission = false;
// let x;
// console.log(x); // undefined
// let user = null;
// let uniqueID = Symbol('45');
// const anotherId = Symbol(45);
// console.log(uniqueID===anotherId); // Comparison
// let bigNumber = 9007199254740991n;

// ### Non Primitive ###
let Arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(typeof Arrays);


let fun = function () {
  console.log("Hello World");
}
fun(); // Object



let arrowFunc = ()=>
{
    console.log("Enter Your name: ");
}
arrowFunc();



let obj = {
  raj: 45,
  "rahul ": 46,
  naman: 78,
};
console.log(obj);
console.log(typeof obj);