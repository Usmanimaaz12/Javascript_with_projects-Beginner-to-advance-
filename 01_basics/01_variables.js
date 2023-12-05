const accountId = 144553 // number
let accountEmail = "hitesh@google.com" // string
var accountPassword = "12345"  // string
accountCity = "Jaipur"  // string
let accountState;

// accountId = 2 // not allowed because of const


accountEmail = "hc@hc.com"  // allowed because of let
accountPassword = "21212121"    // allowed because of var
accountCity = "Bengaluru"   // allowed because of no keyword as let or var

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])