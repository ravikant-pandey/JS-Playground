// While Loop

let a = 1;
while(a<=10)
{
    console.log(`N0.: ${a}`);
    a=a+1;
}

// With array
const myArray = ["Red", "Blue", "Green", "Yellow", "Purple"];
let arr = 0;
while(arr<myArray.length)
{
    console.log("Color :",myArray[arr]);
    arr++; // arr+=1 // arr = arr+1
}

// do-while loop

let i = 1;
do
{
    console.log("Hello World",i)
    i++;
}while(i<=10);

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = ["apple", "banana", "cherry", "date", "elderberry"];

let index = 0;
do
{
    // console.log("Number : ",array[index]);
    console.log(array2[index]);
    
    index++;
}while(index<array2.length)