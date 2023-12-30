const User = {
    _email: 'm@mu.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);  //  Note : getting email using getter is with .email and not by .email() because it is not a function it is a property.