// Old syntax

const Teacher =
{
    makeVideo: true
}

const TeachingSupport =
{
    isAvailable: true
}

const User =
{
    name: 'rahul',
    email: 'rahul@example.com'
}

const TaSupport =
{
    makeAssignment: "JS",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Mordern Syntax
Object.setPrototypeOf(TaSupport, TeachingSupport);

// // Parent Class
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// // Child Class (Extending Person)
// class User extends Person {
//     constructor(name, age, role) {
//         super(name, age); // Parent class constructor को call करना ज़रूरी है
//         this.role = role;
//     }

//     getRole() {
//         console.log(`My role is ${this.role}`);
//     }
// }

// // Object Create
// let user2 = new User("Sanjay", 30, "Manager");

// user2.greet();   // Output: Hello, my name is Sanjay and I am 30 years old.
// user2.getRole(); // Output: My role is Manager.

