const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]    // spread operator (...)    // ...marvel_heros : spread all the elements of marvel_heros

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]   // nested array

const real_another_array = another_array.flat(Infinity)     // flat() : convert nested array to single array (Infinity : convert all nested array to single array)
console.log(real_another_array);    



console.log(Array.isArray("Maaz"))  // false : "Maaz" is not an array
console.log(Array.from("Maaz"))    // [ 'M', 'a', 'a', 'z' ] : convert string to array
console.log(Array.from({name: "Maaz"})) // [] : empty array because object is not iterable

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // [ 100, 200, 300 ] : convert variables to array