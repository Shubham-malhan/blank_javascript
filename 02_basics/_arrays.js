// array 

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["skatiman","nagraz"];
const myArr2 = new Array(1, 2, 3, 4);
//console.log(myArr[0]);
//console.log(myArr);
//console.log(myArr.length);

// Array Methods

//myArr.push(6); // push insert the value
//console.log(myArr);
//myArr.pop(); // pop delete the last value 
//console.log(myArr.length);

//myArr.unshift(0); // add the value in the start 
//myArr.shift(); // remove the value form the start 

// console.log(myArr.includes(1));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join();

// console.log(newArr);

// console.log(myArr);

// slice , splice 

console.log("A", myArr);

const myn1 = myArr.slice(1,2); // in slice the orginal array don't get change and the range is not completely taken.

console.log("B" , myArr);
console.log(myn1);

const myn2 = myArr.splice(1,2); // in splice the original array get change and the splice element get removed from the array and the is complete.

console.log("c" , myArr);
console.log(myn2);

