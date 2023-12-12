// for of
//1. for of loop is used to iterate over iterable objects like arrays, strings, maps, sets etc.
//2. for of loop is not used to iterate over objects 
// NOTE : To iterate over objects using for of loop, we need to use Object.keys() or Object.values() or Object.entries() methods
//           Example:   const myObject = {  game1: 'NFS',  game2: 'Spiderman'}  
//                       for (const [key, value] of Object.entries(myObject)) {    console.log(key, ':-', value);  } 


// ["", "", ""]     // array of strings
// [{}, {}, {}]    // array of objects

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")   // key value pair
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);    // Map(3) {"IN" => "India", "USA" => "United States of America", "Fr" => "France"}

for (const [key, value] of map) {
    // console.log(key, '=>', value);
}   

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);    
    
// }   // TypeError: myObject is not iterable

// for (const [key, value] of Object.entries(myObject)) {
//     console.log(key, ':-', value);
    
// }   // game1 :- NFS  game2 :- Spiderman     

for(const key in myObject) {
    console.log(key, ':-', myObject[key]);
    
}  // game1 :- NFS  game2 :- Spiderman