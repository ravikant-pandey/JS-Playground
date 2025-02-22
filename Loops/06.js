// Filter

// const cars = ["Tesla Model S", "BMW X5", "Mercedes C-Class", "Audi A6", "Ford Mustang", "Toyota Camry", "Honda Civic", "Chevrolet Corvette"];

// const func = cars.forEach((item)=>{
//     console.log(item)
//     return item; //  ForEach nothing return
// })

// console.log(func);

// Filter
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNum = myNum.filter((num) => num > 5);
// console.log(newNum);

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // varna its is use like a object
// const evenNum = myNum.filter((num) => {
//   return num % 2 == 0;
// });

// console.log(evenNum);

// this work with help of forEach

const newArray = [];

myNum.forEach((num) => {
  if (num % 2 != 0) {
    // console.log("Odd number:", num);
    newArray.push(num); // Push odd numbers into newArray
  }
});

// console.log("New Array with Odd Numbers:", newArray);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// const userBooks = books.filter((book) => book.genre === "History");
let userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});
console.log(userBooks);


