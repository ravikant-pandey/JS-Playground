// JavaScript and Classes
// Object Literal
// const user =
// {
//     name: 'Rahul',
//     isLoggedIn: true,
//     loggedInCount: 14,
//     userId: '@rahul123',
//     gotUserDetail: function () {
//         // return "Got user details from database.." 
//         // return `User name: ${this.name}`;
//         return this
//     }
// }
// console.log(user)
// // current context (This)
// console.log("this", user.gotUserDetail())
// console.log(this)

// Constructor Function like new 
// A constructor function helps create multiple objects with the same structure and properties.
// const promiseOne = new Promise()

function User(userName, age, email) {
    this.userName = userName;
    this.age = age;
    this.email = email;
    // if we are not user return this no problem will still return value
    // return this
    this.getDetails = function () {
        return `User name: ${this.userName}\nAge: ${this.age}\nEmail: ${this.email}`;
    };
}

// Creating an instance of User
// const user1 =  User('Rahul', 34, "rahul@gmail.com");
// const user2 =  User('Raj',23,"raj@gmail.com")
// New
const user1 = new User('Rahul', 34, "rahul@gmail.com");
const user2 = new User('Raj', 23, "raj@gmail.com")

// constructor property khud ki baare me referenece
// It is a self-reference because every object has a constructor that points back to its own blueprint.
console.log(user1.constructor);
console.log(user1 instanceof User);  // ✅ true
// The instanceof operator checks whether an object is an instance of a particular class or constructor function. It verifies if the object was created using a specific blueprint.
// console.log(user1.getDetails());


// 1	Define a constructor function with parameters.
// 2	Create an object using new User("Rahul", 30, "rahul@example.com").
// 3	Inside the function, this.userName = userName assigns values.
// 4	JavaScript automatically returns the object (user1).
