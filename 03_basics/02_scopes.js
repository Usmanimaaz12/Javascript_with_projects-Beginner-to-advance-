//var c = 300  // global scope 
let a = 300 
if (true) {
    let a = 10 
    const b = 20 
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "maaz"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "maaz"
    if (username === "maaz") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))   // this will work as function is hoisted 

function addone(num){
    return num + 1
}



console.log(addTwo(5))  // this will not work as "function expression" is not hoisted
const addTwo = function(num){
    return num + 2
}
