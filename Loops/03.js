// High order arr1ay loop.

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2 = ["hello", "world", "JavaScript", "coding", "developer"];

// // For of Loop (prints values)
// for (const i of arr1) {
//     console.log(i);
// }

// for (const j of arr2) {
//     console.log(j);
// }

// // For in Loop (prints indexes by default, fixed to print values)
// for (const i in arr1) {
//     console.log("Num: ", arr1[i]); 
// }

// for (const j in arr2) {
//     console.log("String: ", arr2[j]); 
// }

// Maps (Unique Value duplicate not allowed)

// const map = new Map(); 
// map.set("name", "Rahul");
// map.set("age", 25);
// map.set("city", "New York");
// map.set("age", 25); // duplicate
// map.set("city", "New York");

// for (const [key, value] of map) {
//     // console.log(key, ":", value);
// }

// console.log(map)

// Key value with object
const obj = {
    name : "Rahul",
    age : 20,
    idNo : "TNA123",
    city : "MBD"
};

for (const [key, value] of obj) {  // ❌ TypeError: obj is not iterable
    console.log(`${key} : ${value}`);
}
  

// Check map for in
const map = new Map(); 
map.set("name", "Rahul");
map.set("age", 25);
map.set("city", "New York");
map.set("age", 25); // duplicate
map.set("city", "New York");

for (const [key, value] in map) { // ❌ TypeError: obj is not iterable
    console.log(key, ":", value); // 
};