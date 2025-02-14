// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory Types in JavaScript
// JavaScript uses two types of memory:

// Stack Memory (Primitive Data Types)
// Heap Memory (Reference Data Types)

// Stack Memroy
let myName = "Pandey";
let anotherName = myName;
anotherName = "R....Pandey"
console.log(anotherName); // Not same because it is use value means copy so its not same
console.log(myName);



// Heap Memory
let userOne = function()
{
    emailId = "abc@example.com";
    upiId = "abc123@ybl";
} 

let userTwo = userOne;

userTwo.emailId = "xyz@example.com";

console.log(userOne.emailId) // Same Because it is use reference of another 
console.log(userTwo.emailId)

