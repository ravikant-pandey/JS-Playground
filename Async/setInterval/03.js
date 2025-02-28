let count = 0;
let interval = setInterval(() => {
    console.log("Running...", count);
    count++;

    if (count === 3) {
        clearInterval(interval);
        console.log("Interval Stopped!");
    }
}, 1000);
