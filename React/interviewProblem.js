// in javascript the value of 'PI' is 3.14 i want to do that it can be 3 or 4 or not
// It can happen
// how 
// It cannot happen
// Why beacuse constant 


const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor)
// console.log(Math.floor(Math.PI))
// Math.PI = 4
// console.log(Math.PI)

const car =
{
    brand: "BMW",
    price: 4000000,
    carDetails: () => {
        console.log("Car Details not available")
    }
}
Object.defineProperty(car, 'brand', {
    // writable: false,
    enumerable: false,
    // configurable: false
})

// console.log(car)
// console.log(Object.getOwnPropertyDescriptor(car, "brand"))

// for (let [key,value] of car) // car is not iterable because it is object
for (let [key, value] of Object.entries(car)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`)
    }
}