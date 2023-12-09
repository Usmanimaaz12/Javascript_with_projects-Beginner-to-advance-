const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance); 
// console.log(balance.length)   // undefined because length is not a property of Number object
// console.log(balance.toString().length);  // 3 because toString() converts Number object to string and then length is applied to it
// console.log(balance.toFixed(1));   // 100.0  ; toFixed is used to fix the number of decimal places

const otherNumber = 123.8966

let myNum = Number(null) 
// console.log(myNum);  // 0

let myNum2 = Number(undefined)
// console.log(myNum2);    // NaN

 //console.log(otherNumber.toPrecision(4));  // 123.9 ; toPrecision is used to fix the number of digits

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));    // 10,00,000 ; toLocaleString is used to convert number to locale string

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);    
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // random number between 10 and 20


console.log(typeof new Number(42) === "object")     // true because new Number(42) is an object
console.log(new Number(42) !== 42); // true because new Number(42) is an object and 42 is a number
console.log(typeof 42); // "number"

console.log(Number.MAX_SAFE_INTEGER);  // 2^53 - 1


// 255; // two-hundred and fifty-five
// 255.0; // same number
// 255 === 255.0; // true
// 255 === 0xff; // true (hexadecimal notation)
// 255 === 0b11111111; // true (binary notation)
// 255 === 0.255e3; // true (decimal exponential notation)
