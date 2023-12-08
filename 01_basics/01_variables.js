//  THERE ARE 3 KEYWORDS TO DECLARE VARIABLES 

// 1. const : constant variable (value can't be changed)   ; came in ES6
// 2. let : variable (value can be changed)                ; came in ES6
// 3. var : variable (value can be changed) 



// 1. const : constant variable (value can't be changed)
const accountId = 153 // number
// accountId = 2 // not allowed because of const


// 2. let : variable (value can be changed)
let accountEmail = "usmanimaaaz12@google.com" // string

// 3. var : variable (value can be changed)
var accountPassword = "12345"  // string


// 4. no keyword : variable (value can be changed) 
accountCity = "Jaipur"  // string

let accountState;


accountState = "Uttar Pradesh"   
accountEmail = "mz@gmail.com"  // allowed because of let
accountPassword = "21212121"    // allowed because of var
accountCity = "Gurugram"   // allowed because of no keyword as let or var before accountCity 

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// we can use diffferent keywords with console to get different results
console.log(accountId);
console.warn(accountEmail);
console.error(accountPassword);
console.info(accountCity);
// console.trace(accountState);
// and many more