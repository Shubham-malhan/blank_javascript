let userEmail = [];

if (userEmail) {
    console.log("Got the email :");
}else {
    console.log("Don't get email :");
}


// Falsy Value
// 1. False
// 2. 0 (zero)
// 3. -0 (-zero)
// 4. 0n (Bigint)
// 5. "" (empty string)
// 6. null 
// 7. undefined 
// 8. NaN
// other than that are truthy value 

// truthy value 
// 1. "0"
// 2. "false"
// 3. " "
// 4. []
// 5. {}
// function(){} (empty Function)


if (userEmail.length === 0){
    console.log("array is empty");
}

let objEmpty = {};

if (Object.keys(objEmpty).length === 0) {
    console.log("object is empty");
}

// Nullish Coalescing Opeartor (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15

console.log(val1);

// Ternary operator 
// condition ? true : false ..

const iceTeaPrice = 100;
iceTeaPrice <=80 ? console.log("Less than 80") : console.log("More than 80");


