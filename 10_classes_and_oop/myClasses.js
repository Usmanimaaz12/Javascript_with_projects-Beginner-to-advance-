
// ES6
// classes in javascript are just syntactic sugar which came in ES6 to make it easier to work with objects and prototypes


class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    // NOTE :  function keyword is not used in classes
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());



// Behind the scene : unwrapped version of the above code

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){    // we can add methods to the prototype
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")  

console.log(tea.encryptPassword());
console.log(tea.changeUsername());