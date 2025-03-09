class User {
    constructor(name, email, password, age) {
        this.name = name
        this.email = email
        this.password = password
        this.age = age
    }
    // give the user which want to see
    get password() {
        return `${this._password.toLowerCase()}ghost`;
    }
    // set in databae
    set password(val) {
        this._password = val
    }

    get email() {
        return this._email.toUpperCase();
    }
    
    set email(val) {
        this._email = val.toLowerCase()
    }
}
const user1 = new User('Rahul', 'rahul@google.com', 'rahuLKUMar2209', 23);
// console.log(user1.password)
console.log(user1.email)