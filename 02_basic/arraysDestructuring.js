const student = {
    name: "Rahul",
    age: 22,
    rollNo: "TCA123",
    grade: "A",
    course: "Computer Science"
};

// Destructuring the student object
const { name, age, rollNo, grade, course } = student;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Roll No: ${rollNo}`);
console.log(`Grade: ${grade}`);
console.log(`Course: ${course}`);

// // =========== ...Other details ================= create another array
// const student = {
//     name: "Rahul",
//     age: 22,
//     rollNo: "TCA123",
//     grade: "A",
//     course: "Computer Science",
//     address: "New Delhi",
//     contact: "9876543210"
// };

// // Destructuring with rest operator
// const { name, age, ...otherDetails } = student;

// console.log(`Name: ${name}`);
// console.log(`Age: ${age}`);
// console.log("Other Details:", otherDetails);
