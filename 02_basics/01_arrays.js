// array 
// In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

// JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.


const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)   // add at first
myArr.shift()        // remove from first
console.log(myArr); // [ 1, 2, 3, 4, 5 ]
// console.log(myArr.includes(9));  // false : 9 is not in array
// console.log(myArr.indexOf(3));   // 2 : 3 is in index 2

// const newArr = myArr.join()  

// console.log(myArr);
// console.log( newArr);


// slice, splice
// slice : copy of array but the original array is not changed  (syntax : slice(start, end)
// splice : copy of array and the original array is changed (syntax : splice(start, end)


console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
