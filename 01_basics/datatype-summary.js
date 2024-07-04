// primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('shubham');
const fname = Symbol('shubham');
// console.log(typeof (id));
// console.log(typeof(fname));
console.table([id,fname]);
console.log(id === fname);

const bigNumber = 258745669456324685n;


// Reference (Non-primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "shubham",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}