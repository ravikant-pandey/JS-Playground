// // For Loop

// for (let i = 1; i <= 10; i++) {
//   if (i == 5) {
//     console.log("This is Five...");
//   }
//   console.log(`N0.: ${i}`);
// }

// // Nasted
// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop value ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i*j}`);
//   }
// }

// // Loop in array
// const myArray = ["Red", "Blue", "Green", "Yellow", "Purple"];
// for(let i = 0;i<myArray.length;i++)
// {
//     console.log(myArray[i]);
// }

// // Break Stop 
// for (let i = 1; i <= 10; i++) {
//   if (i == 5) {
//     console.log("Detecet 5..");
//     break;
//   }
//   console.log(`N0.: ${i}`);
// }

// Continue Skip

for (let i = 1; i <= 10; i++) {
  if (i == 9) {
    console.log("Detecet 9..");
    continue;
  }
  console.log(`N0.: ${i}`);
}
