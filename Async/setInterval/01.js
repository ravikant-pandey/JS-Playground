let count = 0;

let interval = setInterval(() => {
    console.log("Count:", count);
    count++;

    if (count > 5) {
        clearInterval(interval); // Interval बंद कर देगा
    }
}, 1000);
