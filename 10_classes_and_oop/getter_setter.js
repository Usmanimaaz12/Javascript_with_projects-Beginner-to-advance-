// Some important notes about getter and setter
// 1. Getter and setter are used to access private properties
// 2. Getter and setter are used to perform some operations on the properties before returning them
// 3. If we use one of the getter or setter then we have to use both of them


class User {
    constructor(email, password){
        this.email = email;  // It will directly call the setter with the value of email.
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    // Note : get has no parameter and set has one parameter
    // Note : set do not have return statement
    get password(){
        return `${this._password}maaz`
    }

    set password(value){
        this._password = value
    }
}

const maaz = new User("maaz@g.com", "abc")
console.log(maaz.email);