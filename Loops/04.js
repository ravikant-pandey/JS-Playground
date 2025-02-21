const person = {
    name: "Alice",
    age: 25,
    city: "New York",
    profession: "Software Developer",
    email: "alice@example.com",
    phone: "123-456-7890",
    skills: ["JavaScript", "React", "Node.js", "Python"],
};

for(const key in person)
{
    // console.log(`${key} : ${person[key]}`)
}


// Array 
const cars = ["Tesla Model S", "BMW X5", "Mercedes C-Class", "Audi A6", "Ford Mustang", "Toyota Camry", "Honda Civic", "Chevrolet Corvette"];
for (const key in cars)
{
    console.log(`Car ${key} => ${cars[key]}`)
}