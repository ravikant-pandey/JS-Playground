const myDate = Date();
// console.log(myDate)

// console.log(myDate.toString());       // Full date & time string
// console.log(myDate.toDateString());   // Human-readable date (without time)
// console.log(myDate.toLocaleString()); // Localized date & time format



// console.log(myDate.toString());       // Full date & time string
// console.log(myDate.toDateString());   // Human-readable date (without time)
// console.log(myDate.toLocaleString()); // Localized date & time format

// const myCreatedDate = new Date(2030,0,10,5,5,45); // Month start with 0 - 11 0->  january

const myCreatedDate = new Date("2024-1-1"); // Month start with 0 - 11 0->  january
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());



// // Interview question how to convert this in second ?
// console.log(Math.round(Date.now()/1000));


let newDate = new Date();
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

// Default locale string (system-dependent)
console.log(newDate.toLocaleString());

// Custom format with explicit timezone (adjust as needed)
console.log(newDate.toLocaleString('en-US', { 
    timeZone: 'Asia/Kolkata', // Set correct timezone (IST in this case)
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: true 
}));

// Example for UTC
console.log(newDate.toLocaleString('en-GB', { 
    timeZone: 'UTC', 
    dateStyle: 'full', 
    timeStyle: 'medium' 
}));
