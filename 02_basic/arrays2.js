const pro_Languages = ["JavaScript", "Python", "Java", "C++", "TypeScript"];

const pro_Languages2 = ["CSS", "HTML", "R", "C", "SQL"];

// pro_Languages.push(pro_Languages2);
// console.log(pro_Languages+pro_Languages2);
const newArray = pro_Languages.concat(pro_Languages2);
// console.log(newArray);

const allProgrammingLanguage = [...pro_Languages, ...pro_Languages2]; //  spread
// If you want to spread both arrays into a new one, you can use the spread operator (...) 
// console.log(allProgrammingLanguage)


const numbers = [1, [2, 3], [4, [5, 6]], 7];

const flatNumbers = numbers.flat(2); // Flattens up to 2 levels deep // Infinity

// console.log(flatNumbers);

// Ask

console.log(Array.isArray("Rahul")); // Output is False
console.log(Array.from("Rahul"));  // Convert in array
console.log(Array.from({name: "Rahul"})); // Intersting for interview
let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
let score5 = 500;

console.log(Array.of(score1,score2,score3,score4,score5));
// Why? 🤔
/* Array.from() is typically used to convert iterable objects (like strings, arrays, or sets) or array-like objects (like arguments or NodeList) into an array.
The object { name: "Rahul" } is not iterable and does not have a length property, so Array.from() returns an empty array ([]).
 Interview Insights 💡*/





//  const str = "name:Rahul,age:25,city:Delhi";

// // Convert string to an array of key-value pairs
// const keyValueArray = str.split(",").map(pair => {
//     const [key, value] = pair.split(":");
//     return { [key]: value };
// });

// console.log(keyValueArray);

