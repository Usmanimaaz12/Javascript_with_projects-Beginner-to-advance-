// Note :
// fecth is a promise based function which is used to make api calls; it is example of promise consumption

// Promises came in ES6
// there are 3 states of promises
// 1. Pending   2. Resolved   3. Rejected

// promises reduce the callback hell: callback hell is a situation where we have to write a lot of callbacks


// Making a new promise : Promise s an object in JS
const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is compelete');
        resolve()
    }, 2000)
});
// // .then is directly related to resolve : called when promise is resolved
promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(
    function (resolve,reject) {
        setTimeout(function () {
            console.log("self async");
            resolve();
        }, 3000)
        
    }
).then(function () {
    console.log("self done");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Maaz", email: "mz@example.com"})  // we can pass any data in resolve function
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);  // output: {username: "Maaz",  email: "mz@example"}
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "maaz", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

const username = promiseFour.then((user) => { return user.username });
console.log(username);  // output: Promise { <pending> }  // because promiseFour is not resolved yet

// if .then() is chained then it will return the value of previous .then() to the next .then()
 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

// promiseFive.then((user) => { console.log(user) }).catch((error) => { console.log(error) });
//-----------------OR-----------------
async function consumePromiseFive(){
    try {
        const response = await promiseFive   // promiseFive is eventual object ; we should not write promiseFive()
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// FROM THE ABOVE EXAMPLE WE CAN SAY THAT .then() and .catch() can be used OR async await can be used to consume promises


// // async function getAllUsers(){
// //     try {
// //         const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()   // response.json() is also a promise so we have to use await here also
// //         console.log(data);
// //     } catch (error) {
// //         console.log("E: ", error);
// //     }
// // }

// //getAllUsers()

fetch('https://api.github.com/users/usmanimaaz12')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// It takes an array of promises and returns a single promise which is resolved when all the promises in the array are resolved
// Example:  Promise.all([promiseOne, promiseTwo, promiseThree]).then((data) => console.log(data))


// Note : fetch has higher priority than setTimeout

//note: network error from fetch goes in onfulfilled state


// NOTE : Error handling in differet asynchronous functions
// In promises we use .catch() to handle errors.  Example: promiseFive.catch((error) => console.log(error))

// In async await we use try and catch to handle errors. Example: try { const response = await promiseFive } catch (error) { console.log(error) }

// In fetch we use .catch() to handle errors. Example: fetch('https://api.github.com/users/usmanimaaz12').then((response) => { return response.json() }).then((data) => { console.log(data); }).catch((error) => console.log(error))

// In callbacks we use if else to handle errors. Example: fs.readFile('file.txt', (err, data) => { if (err) { console.log(err) } else { console.log(data) } })