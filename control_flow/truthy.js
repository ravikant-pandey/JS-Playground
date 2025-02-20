// const userEmail = []
// const userEmail = "";
// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Nullish coalesinscing operator (??) : null and undifined
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 5;
// val1 = undefined ?? 2;
// val1 = undefined ?? null;
val1 = null ?? undefined ?? 10 ?? 25;
console.log(val1);

// Terniary operator

// condition ? true statement : false statement

const computerPrice = 60000;

const message = computerPrice > 65000 
    ? "The computer is expensive" 
    : "The computer is affordable";

console.log(message);
