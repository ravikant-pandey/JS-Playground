class User {
    constructor(username) {
        this.username = username
    }
    userDetails() {
        console.log(`User name is: ${this.username}`);

    }
    // stop access
    static createId()
    {
        console.log(`User id is: ${this.username+(Math.floor(Math.random()*1000)+1)}`)
    }
}

const newUser = new User("Raj");
newUser.createId()