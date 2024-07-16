let marks = [97, 82, 77, 98, 54];
// console.log(marks);
// console.log(marks.length);

let heros = [["Batman", ["Ironman"], "Skatiman", "Thor"]];
// console.log(heros);
let hero = heros.flat(Infinity);
let allArray = [...marks, ...hero ];
// console.log(allArray);
// allArray.push("i am added"); // add the element in the end. 
// console.log(allArray);
// allArray.pop(); // delete the element in the end.
// console.log(allArray);
// console.log(marks.concat(heros));
// allArray.shift(); // remove the element from the start.
// console.log(allArray);
// allArray.unshift("hi"); // add the element in the start.
// console.log(allArray);

// console.log(allArray.indexOf("Batman")); // This tell us the element is present and on which index of array 

// console.log(allArray.includes("Batman")); // This tell us only about the element is present or not 


const myArray = allArray.join();
console.log(myArray);
// for(i = 0 ; i < myArray.length ; i++){
//     console.log(myArray.split());

// }



// slice, splice

const otherArray = [1, 2, 3, 4];
// console.log(otherArray);

const mynA = otherArray.slice(1, 3); // take from the start to (end-1) and do not change the original array or give the copy of the array.
// console.log(otherArray);
// console.log(mynA);

const mynA1 = otherArray.splice(1, 3); // take from the start to end and make change in the original array or we can say give the refrence of the array.
// console.log(otherArray);
// console.log(mynA1);

const sArray = new Array (1,2,3,"shuha"); // Another way of define the array.
// console.log(sArray);

// console.log(Array.isArray(myArray));
// console.log(Array.from(myArray));
// console.log(Array.of(myArray, ...sArray));