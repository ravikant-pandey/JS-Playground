// else if
// let balance = 450; // Change this value to test different cases

// if (balance < 500) {
//   console.log("Balance is less than 500");
// } else if (balance < 750) {
//   console.log("Balance is less than 750 but greater than or equal to 500");
// } else if (balance < 900) {
//   console.log("Balance is less than 900 but greater than or equal to 750");
// } else if (balance < 1000) {
//   console.log("Balance is less than 1000 but greater than or equal to 900");
// } else {
//   console.log("Balance is 1000 or more");
// }

const userLoggedIn = true;
const debitCard = true;
const panIndia = false;
const loggedInFromGoogle = false;
const loggedInFromGmail = true;

if(userLoggedIn && debitCard && panIndia)
{
  console.log("Allow to buy a course...")
}
if(loggedInFromGoogle || loggedInFromGmail)
{
  console.log("Yes you can log in...");
}

