const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);
// console.log(balance.toFixed(1));

// console.log(balance.toString().length);

// console.table([typeof score,typeof balance,typeof balance.toString()]);

const otherNumber = 123.89967;

// console.log(otherNumber.toPrecision(2));
// console.log(otherNumber.toFixed(1));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++

let m = [1,55,88,44,111,22,0,884,44]
let num = Number(m);
console.log(typeof num);
console.log(typeof m);

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.abs(4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
console.log(Math.min(num));
console.log(Math.floor(Math.random()*6) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1)) + min);// Important formula