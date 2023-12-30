//The static keyword in js are different from other languages like java and c++.
// In js static keyword is used to create static methods and static properties which cannot be accesses by the inherited classes.

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());   // iphone.createId is not a function   (static methods cannot be accessed by the inherited classes)