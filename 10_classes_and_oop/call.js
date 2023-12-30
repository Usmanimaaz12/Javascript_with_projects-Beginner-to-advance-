// CALL :
// The call method in JavaScript is used to call a function with a given this value and arguments provided individually.

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username) // call the SetUsername function and pass the username giving it a this value of the current object
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

// If in the above code we don't use call method then the SetUsername function will be called with a this value of undefined and the username will be set on the global object.