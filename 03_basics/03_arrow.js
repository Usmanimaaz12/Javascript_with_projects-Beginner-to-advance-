const user = {
    username: "maaz",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);  // this will give empty object as this is global object in nodejs


// THREE WAYS TO DECLARE A FUNCTION : 1. function declaration 2. function expression 3. arrow function

// function chai(){
//     let username = "maaz"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "maaz"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "maaz"
//     console.log(this);
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }              //Note : if we use curly braces then we have to use return keyword

// const addTwo = (num1, num2) =>  num1 + num2      //Note : if we don't use curly braces then we don't have to use return keyword

// const addTwo = (num1, num2) => ( num1 + num2 )   //Note : if we use parenthesis then we don't have to use return keyword

const addTwo = (num1, num2) => ({username: "maaz"}) 


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()