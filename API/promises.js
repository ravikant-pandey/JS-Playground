// // Promises
// const promiseOne = new Promise((resolve, reject) => {
//     // Do an async task
//     // DB calls, cryptography, network
//     setTimeout(() => {
//         console.log("Async task is complete");
//         resolve();
//     }, 3000);
// });
// // resolve ka connection hai sidha resolve ke sath.
// promiseOne.then(() => {
//     console.log("Promise Consumed")
// })

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Task is completed.")
//         resolve();
//     }, 1000)
// }).then(() => {
//     console.log("Promise Resolved")
// })

// // Date pass // with help of object you use anything else like array etc.
// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             userName: "Ram",
//             email: "ram@example.com",
//             age: 23
//         });
//     }, 2000)
// }).then((user) => {
//     console.log(user)
// });

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             resolve({
//                 userName: "Rahul",
//                 email: "rahul@example.com",
//                 age: 23,
//                 password: "abc123"
//             })
//         }
//         else {
//             reject("Error: Somting went wrong!!")
//         }
//     }, 2000)
// });
// promiseFour
//     .then((user) => {
//         console.log(user);
//         return user.userName
//     })
//     .then((userName) => {
//         console.log(userName)
//     })
//     .catch((error) => {
//         console.log(error)
//         console.log("Reject")
//     })
//     .finally(() => {
//         console.log("Finally!\nPromise is either resolve or rejected.")
//     })

// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({
//                 userName: "JavaScript",
//                 password: "123abc"
//             })
//         }
//         else {
//             reject("Error: Something went wrong!!")
//         }
//     }, 1000);
// });

// async function Consumed() {
//     try {
//         const response = await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error);
//     }
// }
// Consumed();


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://api.github.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("error")
//     }
// }
// getAllUsers()

// +++++++++++ With help of then and catch ++++++++++++

fetch('https://api.github.com/users/Pandey404')
.then((response)=>
{
    return response.json(); 
})
.then((data)=>
{
    console.log(data)
})
.catch(()=>
{
    console.log("error")
})