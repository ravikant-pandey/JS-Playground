// Singleton A Singleton is an object which can only be instantiated one time.
// Object.create

// === Object Literals ===

const mySym = Symbol("Key1");
const user = {
  name: "Rahul",
  "Full Name" : "Rahul Kumar",
  age: 22,
  [mySym] : "myKey1", // As Symbol refer
  mySym : "myKey1", // As String
  rollNo: "Tca123",
  email : "rahul123@example.com",
  isLoggedIn: false,
  isLoggedInDays:["Monday","Sunday","Saturday"]
};

// console.log(user.name); // First
// console.log(user["name"]); // Second
// console.log(user["Full Name"]); //  Third
// console.log(user[mySym]);
// console.log(typeof mySym);

// user.email = "rahul@chatGpt.com";
// console.log(user["email"]);
// Object.freeze(user); // Not chnage anything it is lock.
// user.email = "rahul@microsoft.com"; // Not chnage because object is freeze(Lock).
// // console.log(user);


user.greeting = function()
{
    console.log("Hello User! Good Morning..")
}
user.greetingTwo = function()
{
    console.log(`Hello User!,Good Morning.. ${this["Full Name"]}`); // `this` refers to the `user` object because greetingTwo is a method of `user`.
}
user.greeting();
user.greetingTwo();