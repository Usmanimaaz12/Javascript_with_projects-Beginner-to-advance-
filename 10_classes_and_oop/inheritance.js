// extends and super keywords 
// super keyword is used to call the constructor of the parent class (.call() method is used behind the scenes to pass the this value)
// extends keyword is used to inherit the properties and methods of the parent class (prototype chain is used behind the scenes using __proto__ property)



class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);  // true  // instanceof operator is used to check if an object is an instance of a class or not