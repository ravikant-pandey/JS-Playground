function greeting()
{
    console.log("Good Evening.....");
}

const func = function greeting(yourName) {
    console.log(`Good Afternoon....${yourName}`);
}
// greeting();
// func("Rahul");

function addTwoNumber(a, b) {
    console.log(`Sum of two numbers is ${a + b}`);
}

// addTwoNumber(45, 45);
function addTwoNumber(a, b) {
    // let result = a+b;
    // return result;
    return a+b;
    console.log("Hello.") // Never Execute because return means end this code and return
}

const result = addTwoNumber(45, 45);
// console.log("Result",result);


// function userLogInMsg(userName) {
//     if (userName === undefined) {
//         return "Undefined value\nPlease enter your user name!";
//     }
//     if (userName === "") {
//         return "This is an empty string..\nPlease enter your user name!";
//     }
//     return `${userName} just logged in..`;
// }


//  Shortest ++++++++++++
function userLogInMsg(userName) {
    if (!userName) {
        return "Invalid input\nPlease enter your username!";
    }
    return `${userName} just logged in..`;
}

// Testing the function
console.log(userLogInMsg("Rahul")); // Rahul just logged in..
