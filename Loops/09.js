// Reduce Method
const array = [1, 2, 3];

// With help of Arrow Function

// Initial value for the accumulator (starting value for the sum)
let initialValue = 0;

// Use the reduce() method to calculate the sum of all numbers in the array
const totalSum = array.reduce((accVal, currVal) => {
  console.log(`accumulator Value: ${accVal} and current Value: ${currVal}`);
  return accVal + currVal; // Add the current value to the accumulated sum
}, initialValue); // Set the initial value for the accumulator

// Print the total sum
console.log(totalSum);

// normal Function
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let initialValue2 = 0;

const totalSum2 = array2.reduce(function (accVal, currVal) {
  return accVal + currVal;
}, initialValue);

console.log(totalSum2);

// ShortHand

const sum = array.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

// InterView related question shopping cart
const shoppingCart = [
  {
    courseName: "JS",
    price: 2999,
  },
  {
    courseName: "Python",
    price: 5999,
  },
  {
    courseName: "Java",
    price: 3999,
  },
  {
    courseName: "React.js",
    price: 2999,
  },
  {
    courseName: "Full Stack",
    price: 9999,
  },
  {
    courseName: "Cloud Computing",
    price: 10999,
  },
  {
    courseName: "App Development",
    price: 7999,
  },
];


const SubTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(`Final Price: ${SubTotal}`);

