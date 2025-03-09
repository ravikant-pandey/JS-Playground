// Inheritance

class User {
    constructor(username) {
        this.username = username
    }
    logMe() {

        console.log(`User name is: ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }
    addCourse()
    {
        console.log(`A new Course was added by: ${this.username}`)
    }
    teacherDetails()
    {
        console.log(`Teacher name is: ${this.username}\nEmail id: ${this.email}`)
    }
}

const newUser = new Teacher("Dr. Rahul Kumar",'drRahul@google.com',"dr1232209")
// newUser.addCourse();
// newUser.teacherDetails();
newUser.logMe();