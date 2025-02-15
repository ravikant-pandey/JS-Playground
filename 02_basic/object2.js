// Singleton A Singleton is an object which can only be instantiated one time.

const githubUser = new Object();

githubUser.userId = "user123";
githubUser.name = "Rahul";
githubUser.age = 23;
githubUser.email = "user@github.com";
githubUser.isLoggedIn = false;
// console.log(githubUser)

const regularUser = {
  email: "hello@github.com",
  fullName: {
    userFullName: {
      fName: "Rahul",
      lName: "Kumar",
    },
  },
};
// console.log(regularUser.fullName.userFullName);

// Combine two Object

const language1 = {
  name: "JavaScript",
  paradigm: "Multi-paradigm",
  founder: "Brendan Eich",
  firstAppeared: 1995,
  details: function () {
    console.log(
      `${this.name} is a ${this.paradigm} language, created by ${this.founder} in ${this.firstAppeared}.`
    );
  },
};

const language2 = {
  name: "Python",
  paradigm: "Object-oriented, Procedural",
  founder: "Guido van Rossum",
  firstAppeared: 1991,
  details: function () {
    console.log(
      `${this.name} is an ${this.paradigm} language, created by ${this.founder} in ${this.firstAppeared}.`
    );
  },
};

// // Calling the methods
// language1.details(); // Output: JavaScript is a Multi-paradigm language, created by Brendan Eich in 1995.
// language2.details(); // Output: Python is an Object-oriented, Procedural language, created by Guido van Rossum in 1991.

obj1 = {
  1: "One",
  2: "Two",
  3: "Three",
};
obj2 = {
  4: "Four",
  5: "Five",
  6: "Six",
};
// const finalObj = {obj1 ,obj2} array inside array

// const finalObj = Object.assign({}, obj1, obj2); // {}-> Target(gurentee) it is optional but good for given 

// Spread
const finalObj = {...obj1,...obj2};
console.log(finalObj);

// When value come from 'datebase'
const users = [
    {
        id : 1,
        email : "r@github.com",
    },
    {
        id : 2,
        email : "s@github.com",
    },
    {
        id : 3,
        email : "p@github.com",
    },
    {
        id : 4,
        email : "a@github.com",
    }
];
console.log(users[0].email);

console.log(Object.keys(githubUser)); //(Object doesnt know about the which object you want to say so object name give)
// console.log(Object.values(githubUser));
// console.log(Object.entries(githubUser));

// ask this avilable or not

console.log(githubUser.hasOwnProperty('isLoggedIn'));
console.log(githubUser.hasOwnProperty('isLoggedOut'));
