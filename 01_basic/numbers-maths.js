// const num = 45;
// const balance = new Number(45999);
// console.log(balance);
// console.log(balance.toFixed(2));
// console.log(balance.toExponential());
// console.log(balance.toString().length);
// console.log(typeof balance.toString);
// console.log(num);
// const newNum = 145.999
// console.log(newNum.toPrecision(3));
// console.log(balance.toLocaleString('en-IN'));
// console.log(isNaN("Hello")); // true
// console.log(isFinite(100)); // true
// console.log(Number.isInteger(42.5)); // false
// console.log(Number.isSafeInteger(9007199254740992)); // false
// console.log(Number("42")); // 42
// console.log(parseInt("42.99")); // 42
// console.log(parseFloat("42.99")); // 42.99
// console.log((42.567).toFixed(2)); // "42.57"
// console.log((42.567).toPrecision(3)); // "42.6"
// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // 5e-324
// console.log(Number.POSITIVE_INFINITY); // Infinity
// console.log(Number.NEGATIVE_INFINITY); // -Infinity
// console.log(Number.EPSILON); // 2.220446049250313e-16


// ++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++

// console.log(Math)

// console.log(Math.abs(-34));
// console.log(Math.round(4.4));
// console.log(Math.round(4.5));

// console.log(Math.ceil(4.6));
// console.log(Math.floor(9.7));

// console.log("Math.max(10, 20, 30):", Math.max(10, 20, 30));
// console.log("Math.min(10, 20, 30):", Math.min(10, 20, 30));

console.log(Math.round(Math.random()*10));

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min);