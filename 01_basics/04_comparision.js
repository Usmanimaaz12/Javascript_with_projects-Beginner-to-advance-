// console.log(2 > 1);     
// console.log(2 >= 1);   
// console.log(2 < 1);
// console.log(2 == 1);   
// console.log(2 != 1);  


 
// console.log("2" > 1);   // true  (string is converted to number)
// console.log("02" > 1);

console.log(null > 0);  // false (null is converted to 0)
console.log(null == 0); // false (even though == operator does type conversion but null is not equal to 0 )) 
console.log(null >= 0); // true (null is converted to 0) 
// in summary of the above 3 lines : null is treated as 0 in all cases except == operator

// undefined behaves similarly to null in numeric contexts, but in boolean contexts, undefined behaves as false.
console.log(undefined == 0); // false because undefined is not converted to 0 in case of == operator it is converted to NaN
console.log(undefined > 0); // false (undefined is converted to NaN)
console.log(undefined < 0); // false (undefined is converted to NaN)

// === 

console.log("2" === 2,"m");  // false (string is not converted to number)


// DIFFERENCE BETWEEN == AND ===
// == (loose equality)  ; === (strict equality)
// == operator does type conversion ; === operator doesn't do type conversion
// == operator checks only value ; === operator checks value as well as type
// == operator is slower than === operator  because of type conversion
// == operator is not recommended to use ; === operator is recommended to use

// Another equality operator is Object.is(), which is mostly the same as ===, but with a few special cases:
// NaN === NaN is false, but Object.is(NaN, NaN) is true. 
// 0 === -0 is true, but Object.is(0, -0) is false.
// Object.is(null, null) is true, but Object.is(null, undefined) is false.
