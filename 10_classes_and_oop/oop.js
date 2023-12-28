// const user = {
//     username: "maaz",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         //console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);  // this refers to the current object    
//     }

// }



// //console.log(user.username)

// console.log(user.getUserDetails());

// console.log(this);  // this refers to the global object (window object in browser and global object in nodejs)


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("maaz", 12, true)
const userTwo = new User("John", 11, false)
console.log(userOne.constructor);
console.log(userTwo);