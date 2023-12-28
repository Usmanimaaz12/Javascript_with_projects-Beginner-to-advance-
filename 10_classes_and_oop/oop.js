// const user = {
//     username: "maaz",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         //console.log("Got user details from database");
              //  console.log(`Username: ${username}`);   // this will give error : username is not defined in this scope
//         // console.log(`Username: ${this.username}`);     // "this" refers to the current object
//         console.log(this);  // this refers to the current object    
//     }

// }



// //console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);  // this refers to the global object (window object in browser and global object in nodejs)


// NOTE : suppose we want to create 1000 users then we have to write 1000 times the same code for each user
//       so we use constructor function to create multiple objects
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this // this is optional because it is returned by default
}

// Note :  If new is not used then this will create and change the same object again and again
// Therefore new keyword creates an empty object and then calls the constructor function

const userOne = new User("maaz", 12, true)
const userTwo = new User("John", 11, false)
console.log(userOne.constructor);
console.log(userTwo);