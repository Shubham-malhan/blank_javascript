// Immediately Invoked Function Expressions (IIFE)

// Why to use IIFE


// To execute a function immediatly  
//To remove the pollution of global space variable 



(function chai(){ //name IIFE
    console.log(`DB CONNECTED`);
})(); 

( () => {
    console.log(`DB two connected`);
})();

( (name) => {
    console.log(`DB two connected ${name}`);
})("shubham")