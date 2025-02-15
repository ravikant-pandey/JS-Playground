// Object Destructuring

const course = {
    title: "Full Stack Web Development",
    instructor: "Pandey Sir",
    duration: "6 months",
    topics: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    isCertified: true,
    price : 4500
};

// Destructuring properties
const { title, instructor, duration, topics, isCertified ,price} = course;

console.log(`Course: ${title}`);
console.log(`Instructor: ${instructor}`);
console.log(`Duration: ${duration}`);
console.log(`Topics Covered: ${topics.join(", ")}`);
console.log(`Certification Available: ${isCertified ? "Yes" : "No"}`);
console.log(`Price: ${price}`);

// ++++++++++++++++ JSON +++++++++++++++++

// {
//     "title": "Full Stack Web Development",
//     "instructor": "John Doe",
//     "duration": "6 months",
//     "price": 499,
//     "isCertified": true,
//     "topics": ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
//     "studentsEnrolled": 1200,
//     "prerequisites": ["Basic Programming Knowledge"],
//     "rating": 4.8
// }

[
    {},
    {},
    {},
]