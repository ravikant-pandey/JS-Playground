// Immediately Invoked Function Expression
// "An IIFE (Immediately Invoked Function Expression) is used to prevent global scope pollution by creating a private scope for variables and function declarations. This helps in avoiding conflicts with other scripts and keeps the global namespace clean."

(function database() {
  console.log("DB CONNECTED.....");
})(); // ; it is important to stop IIFE Function.

// Sometimes, global scope pollution causes issues, so we use IIFE to remove the pollution caused by global scope variables or declarations.
// Global scope ke polution se problem hoti h kai bar to us global scope ke jo variable hai ya decariation h uske pollution ko hatne ke liye IIFE ka use kiya

// name IIFE
(function addTwo(num1,num2) { 
    console.log("Sum of two numbers is:", num1 + num2);
  })(45,45);
  
// Unname IIFE
((name)=>
{
    console.log("DATABASE CONNECTED.....")
    console.log(name);
})("Ram")