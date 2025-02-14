// For Format Document -> Shift+Alt+F
const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(myArray[2]);

// Method of Array

// myArray.push(45);
// console.log(myArray);

// myArray.pop();
// console.log(myArray);

// myArray.unshift(90);
// myArray.shift();

// console.log(myArray.concat([8,9,10]))
// console.log(myArray.includes(1));
// console.log(myArray.includes(-1));
// console.log(myArray.indexOf(34));
// console.log(myArray.indexOf(3));

// const newArray = myArray.join();
// console.log(myArray);
// console.log(newArray);
// console.log(typeof myArray);
// console.log(typeof newArray);


// Slice and Splice

// Slice
console.log(myArray.slice(0, 4)); // Returns a shallow copy of the first 4 elements of myArray without modifying the original array.

const narr = myArray.splice(0, 4); // Removes the first 4 elements from myArray and returns them as a new array, modifying the original myArray.
console.log(narr);
console.log(myArray)

