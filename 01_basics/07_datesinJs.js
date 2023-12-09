// Dates
// As a UTC time, it is midnight at the beginning of January 1, 1970, UTC+0. UTC stands for Coordinated Universal Time.

let myDate = new Date()     // Date is a constructor function which gives us the current date and time (example: 2021-08-18T06:30:51.000Z)
//console.log(myDate);    // 2021-08-18T06:30:51.000Z
// console.log(myDate.toString());    //Sat Dec 09 2023 11:47:57 GMT+0530 (India Standard Time)    
//console.log(myDate.toDateString());    //Sat Dec 09 2023
//console.log(myDate.toLocaleString());    // 12/9/2023, 11:47:57 AM
//console.log(typeof myDate);              // object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);       // 1629278451000 gives us the time in milliseconds
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));    // 1629278451 gives us the time in seconds

let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getMonth() + 1);    // 0-11 , 1 is added to start from 1-12
console.log(newDate.getDay());   

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

//  All static methods ( Date.now(), Date.parse(), and Date.UTC()) return timestamps instead of Date objects. 
//Example: Date.now() returns a timestamp like 1629278451000, not a Date object like 2021 -08 - 18T06: 30: 51.000Z.
//Date.parse() returns a timestamp like 1629278451000, not a Date object like 2021 -08 - 18T06: 30: 51.000Z.
//Date.UTC() returns a timestamp like 1629278451000, not a Date object like 2021 -08 - 18T06: 30: 51.000Z.Date.now() returns a timestamp like 1629278451000, not a Date object like 2021 -08 - 18T06: 30: 51.000Z.Date.parse() returns a timestamp like 1629278451000, not a Date object like 2021 -08 - 18T06: 30: 51.000Z.Date.UTC() returns a timestamp like 1629278451000, not a Date object like 2021 -08 - 18T06: 30: 51.000Z.Date.now() returns a timestamp like 1629278451000, not a Date object like 2021 -08 - 18T06: 30: 51.000Z.Date.parse() returns a timestamp like 1629278451000, not a Date object like 2021 -08 - 18T06: 30: 51.000Z.Date.UTC() returns a timestamp like 1629278451000, not a Date object like 2021 -08 - 18T06: 30: 51.000Z.Date.now() returns a timestamp like 1629278451000, not a Date object like 2021 -08 - 18T06: 30: 51.000Z.Date.parse() returns a timestamp like 1629278451000, not a Date object like 2021 -08 - 18T06: 30: 51.000Z.Date.UTC() returns a timestamp like 1629278451000, not a Date object like 2021 -08 - 18T06: 30: 51.000Z.Date.now() returns a timestamp like 1629278451000, not a Date object like 2021 -08 - 18T06: 30: 51.000Z.Date.parse() returns a timestamp like 1629278451000, not a Date object like 2021 -08 - 18T06: 30: 51.000Z.Date.UTC() returns a timestamp like 1629278451000, not a Date object