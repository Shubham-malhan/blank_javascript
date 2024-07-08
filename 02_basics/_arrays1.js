const marvelHeros = ["Thor", "Ironman", "Spiderman"];

const dcHeros = ["Superman", "Flash", "Batman"];

// marvelHeros.push(dcHeros);

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const  allHeros = marvelHeros.concat(dcHeros);
// console.log(heros);

// const allNewHeros =  [...marvelHeros,...dcHeros]; // Spread...

// console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7,[6, 7,[4, 5]]];


const realAnotherArray = anotherArray.flat(Infinity); // convert all the array into array in a single array 

// console.log(realAnotherArray);

console.log(Array.isArray("shubham"));
console.log(Array.from("shubham"));
console.log(Array.from({name: "shubham"})); // intersting

let score1 = 100;
let score2 = 200;
let score3 = 300;  

console.log(Array.of(score1, score2, score3));