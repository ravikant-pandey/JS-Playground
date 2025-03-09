// Call and This
const setUsername = function (username) {
    // Complex db calls
    this.username = username
    console.log("Called but not proper")
}

const createUser = function (username, email, password) {
    // Not call because its just shere refrence
    // setUsername(username)
    // Now call because of call Method i want to hold refrence
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const newUser = new createUser('rahul', 'rahul@example.com', '123@abc')
console.log(newUser)