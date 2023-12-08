let score = "maaz"

//  We can use typeof operator in 2 ways
// --------console.log(typeof score);
// --------console.log(typeof(score));


let valueInNumber = Number(score)
//console.log(typeof valueInNumber); // number
//console.log(valueInNumber);    // NaN
// console.log(typeof NaN); // number


// 1. Number() : converts value to number 

//  "33" => 33    ; console.log(Number("33")); // 33
// "33abc" => NaN   
//  true => 1; false => 0
let isLoggedIn = "maaz"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);  // true

// 2. Boolean() : converts value to boolean

// 1 => true; 0 => false
// "" => false
// "maaz" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);  // "33"
// console.log(typeof stringNumber);  // string

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);   // -3

// console.log(2+2);   // 4
// console.log(2-2);  // 0
// console.log(2*2);    // 4
// console.log(2**3);   // 8
// console.log(2/3);    // 0.6666666666666666
// console.log(2%3);    // 2

let str1 = "hello" 
let str2 = " maaz"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);    // "12"
// console.log(1 + "2");    // "12"
 
//                                                  IMPORTANT
// console.log("1" + 2 + 2);    // "122" always left to right
// console.log(1 + 2 + "2");    // "32" always left to right
//                                          -------------------------

//  console.log(1 + 2 + 2 + "2");    // "52" always left to right
//  console.log( (3 + 4) * 5 % 3);   // 2  

// console.log(+true);  // 1    ;  + converts value to number
//  console.log(+"");    // 0    ;  + converts value to number

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
// console.log(num1, num2, num3);  // 4 4 4

let gameCounter = 100
++gameCounter;
//console.log(gameCounter);  // 101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion