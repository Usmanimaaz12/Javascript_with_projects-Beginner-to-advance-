"use strict"; // treat all JS code as newer version of JS (ES6)

//Data Types in JS => 8
// 1. number
// 2. bigint      (created using n at the end of number)
// 3. string
// 4. boolean
// 5. null
// 6. undefined
// 7. symbol
// 8. object        (keys are always string or symbol, values can be anything)

// Dynamic Typing => JS is dynamically typed language (no need to specify data type) ,  we can change the data type of variable at runtime
// Weakly Typed => JS is weakly typed language (no need to specify data type) ,  we can change the data type of variable at runtime
// Static Typing => Java, C++, C# are statically typed language (need to specify data type) ,  we can't change the data type of variable at runtime

// Note : All primitive data types are immutable (can't be changed)
// All primitive types except null can be tested with typeof operator
// typeof null => object , so we can't use typeof operator to check null instead use === operator



// A return statement with no value (return;) implicitly returns undefined.
// Accessing a nonexistent object property (obj.iDontExist) returns undefined.
// A variable declaration without initialization (let x;) implicitly initializes the variable to undefined.
// Many methods, such as Array.prototype.find() and Map.prototype.get(), return undefined when no element is found.


// In JavaScript, objects are the only mutable values. Functions are, in fact, also objects with the additional capability of being callable.
    
// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Maaz" + " " + "Usmani")  // string concatenation


let name = "Maaz"   // string
let age = 18           // number
let isLoggedIn = false    // boolean
let state;              // undefined

// number => 2 to power 53  
// bigint   
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique identifier (ES6) , used in object creation (ES6) , used in for of loop (ES6) , used in generators (ES6) , used in iterators (ES6)


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

console.log(42 / +0); // Infinity  ;  
console.log(42 / -0); // -Infinity




//LOOPING
// 1. for loop : when we know the number of iterations in advance 
// 2. while loop : when we don't know the number of iterations in advance 
// 3. do while loop : when we don't know the number of iterations in advance, but we want to execute the loop at least once

// 4. for of loop : when we want to iterate over an array or string or any iterable object
// -------------key point : we can't use for of loop with object because object is not iterable (ES6)----------------
//         example : for (let value of array) { console.log(value) }  // value is value of array

// 5. for in loop : when we want to iterate over an object (ES6) , it iterates over keys of object (ES6) 
//         example : for (let key in object) { console.log(key) }  // key is string or symbol 
//                   for (let key in object) { console.log(object[key]) }  // object[key] is value of object
//                   for (let [key, value] in object) { console.log(key, value) }  // key is string or symbol , value is value of object

// 6. forEach loop : when we want to iterate over an array or string or any iterable object (ES5) , it iterates over values of array or string or any iterable object (ES5)
//         example : array.forEach((value, index, array) => { console.log(value, index, array) })  // value is value of array , index is index of array , array is array itself


        