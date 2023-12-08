const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance); 
console.log(balance.length)   // undefined because length is not a property of Number object
console.log(balance.toString().length);  // 3 because toString() converts Number object to string and then length is applied to it
// console.log(balance.toFixed(1));   // 100.0  ; toFixed is used to fix the number of decimal places

const otherNumber = 123.8966

 console.log(otherNumber.toPrecision(4));  // 123.9 ; toPrecision is used to fix the number of digits

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

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // random number between 10 and 20