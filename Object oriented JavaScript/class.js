// Class

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword() {
//         return `\nUser password encrypted : ${this.password}abc@123`
//     }
//     userDetails() {
//         console.log(`\nuser name is: ${this.username.toUpperCase()}\nuser email is: ${this.email.toUpperCase()}\n`)
//     }
// }

// const newUser = new User("Rahul Kumar", "rahul@example.com", "@rahul2209")
// console.log(newUser)
// console.log(newUser.encryptPassword())
// newUser.userDetails()

// Behind the seen if class not available

const user = function (username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

Object.prototype.encryptPassword = function () {
    return `\nUser password encrypted : ${this.password}abc@123`

}

Object.prototype.userDetails = function () {
    console.log(`\nuser name is: ${this.username.toUpperCase()}\nuser email is: ${this.email.toUpperCase()}\n`)

}

const newUser = new user("Rahul Kumar", "rahul@example.com", "@rahul2209")
console.log(newUser)
console.log(newUser.encryptPassword())
newUser.userDetails()