// singleton    
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Maaz",
    "full name": "Maaz Usmani",
    [mySym]: "mykey1",   // symbols are always wrapped in square brackets
    age: 18,
    location: "Jaipur",
    email: "Maaz@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) // if it was not a symbol, it would have given undefined , and we would have to access using jsUser["mySym"]        

JsUser.email = "Maaz@chatgpt.com"
// Object.freeze(JsUser)   // this will freeze the object and we cannot change the values of the object
JsUser.email = "Maaz@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
   // console.log(`Hello JS user, ${name}`);  // this will give error as name is not defined
    console.log(`Hello JS user, ${this.name}`);  // this will work
}
JsUser.greeting();
JsUser.greetingTwo();