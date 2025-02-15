// Global Scope
var num3 = 100
let num1 = 67;

// Block Scope{}
if (true) {
    const num1 = 45;
    let num2 = 87;
    var num3 = 34; //  access out of loop var
    // console.log("Inner: ",num1);
}
// console.log("Outer: ",num1);

// In Node.js, the global object is global, not window. Anything declared globally is attached to global instead of window.

// In the browser environment, the global object is window. It contains all global variables, functions, and built-in objects.


// ++++++++++++++++++++ Nasted Scope ++++++++++++

function one()
{
    const userName = "Rahul"
    // Closures
    // A closure is a function that remembers the variables from its outer (lexical) scope even after the outer function has finished executing.
    function two()
    {
        const age = 23;
        // console.log(userName)
    };
    // console.log(age); // Stop execution
    two();
};
one();


if(true)
{
    const name = "Raj";
    if(true)
    {
        const enrollmentNo = "ERN123";
//        console.log(name);
    }
    // console.log(enrollmentNo);
}
// console.log(name);


// ++++++++++ Important ++++++++++

console.log(addOne(45)); // access before initialization
function addOne(num)
{
    return num + 1; // num+1
}
console.log(addOne(45));


// console.log(addTwo(54)); // Cannot access 'addTwo' before initialization
const addTwo = function(num) // Its also called expresion and hold by variable
{
    return num + 2;
}
console.log(addTwo(54));