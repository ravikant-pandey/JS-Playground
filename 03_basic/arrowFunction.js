// Arrow function and This

// this
const user = {
  userName: "@user123",
  price: 499,
  welcomeMsg: function () {
    console.log(
      `Hello ${this.userName}, Good Evening!!\n${this.userName} Welcome to my Website!`
    ); // this means cureent contex
    // console.log(this);
  },
};
// user.welcomeMsg();
// user.userName = "Rahul";
// user.welcomeMsg();
// console.log(this); // node environment retrun(refer) empty object because global ke andar koi context nhi hai

function code() {
  let userName = "Raj"; // not this type of function
  // console.log(this.userName); //  this only use object
}
code();

// ++++++++++ Arrow Function ++++++++++

// Arrow function

// const arrow = () => {
//     let userName = "Raj";
//     console.log(this);
//     console.log(this.userName);
// };
// arrow();

const sumOfTwoNumber = (num1,num2) => {
    return num1+num2;
};

console.log("sum Of Two Number",sumOfTwoNumber(45,45));

// Implicit Return
const sumOfTwoNumbers = (num1,num2) => num1+num2;
console.log("sum Of Two Number",sumOfTwoNumbers(90,90));

const addTwo = ()=> ({userName : "Ram"})
console.log(addTwo());