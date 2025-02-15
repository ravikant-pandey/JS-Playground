// Function with Objects

//rest operator and spread operator(...)

// function calculateCartPrice(...num1) {
//   return num1;
// }

// console.log(calculateCartPrice(45, 400, 450, 500, 3000, 45000));

// Interview related question
function calculateCartPrice(val1, val2,...num1) // val1 = 45 ,val2 = 400
{
    return num1;
}
// console.log(calculateCartPrice(45, 400, 450, 500, 3000, 45000));

// oject pass in function
const user = 
{
    userName : "Rahul",
    price : 1499,
}
function handleObject(anyobject) // you write any object
{
    console.log(`user name is: ${anyobject.userName} and price is ${anyobject.price}`);
}


// handleObject(user);

handleObject({
    userName : "Raj Kumar",
    price : 499
});

// Handle Array with help of Function
const myNewArray = ["Rohan",899];

function handleArray(getArray)
{
    console.log(`name is ${getArray[0]} and price ${getArray[1]}`);
}
// With argument
handleArray(["Sandeep",4999]);