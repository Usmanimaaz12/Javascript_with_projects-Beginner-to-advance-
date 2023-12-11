// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO - ${name}`);
})('maaz');

//Important Notes:
// 1. IIFE is used to create a private scope
// 2. IIFE is used to avoid "global scope pollution" by creating a private scope 
// 3. IIFE is used to avoid "variable collision" by creating a private scope
// 4. IIFE is used to avoid "variable hoisting" by creating a private scope
