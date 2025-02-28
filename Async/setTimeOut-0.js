// Agar tum setTimeout(function, 0) use karte ho, toh iska matlab yeh hai ki JavaScript ek callback function ko 0 milliseconds ke delay ke saath execute karega.

// Lekin JavaScript asynchronous hoti hai aur ek event loop follow karti hai. Is wajah se even agar delay 0 ho, toh bhi yeh function synchronous code ke baad execute hoga.

// Example
console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 0);

console.log("End");


// Explanation:
// "Start" sabse pehle print hoga kyunki yeh normal synchronous code hai.
// setTimeout function execute hota hai, lekin yeh JavaScript ke callback queue me chala jata hai aur event loop ke through execute hota hai.
// "End" print hoga kyunki yeh bhi synchronous hai.
// Phir event loop setTimeout wale callback ko execute karega, toh "Inside setTimeout" print hoga.
// Chahe setTimeout ka delay 0 ho, fir bhi yeh call stack me last me jayega aur pehle synchronous code execute hoga.