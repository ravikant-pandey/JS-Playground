let rollNo = "TCA2209";  // rollNo is a string

// console.log(typeof rollNo);  // Output: "string"

let newRollNo = Number(rollNo);  // Trying to convert "TCA2209" to a number

// console.log(typeof newRollNo);  // Output: "number"
// console.log(newRollNo);  // Output: NaN

let isLoggedin = 0;
let newIsLoggedin = Boolean(isLoggedin);
// console.log(newIsLoggedin);

// 1 - true 0 - false "" - false
// "string" - true

let num1 = 45;
let strNumber = String(num1);
console.log(typeof strNumber);
console.log(strNumber);