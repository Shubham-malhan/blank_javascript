// for of
const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
//   console.log(num);
}

const greetings = "hello world!";

for (const greet of greetings) {
    if (greet == " "){
        continue;
    }
    // console.log(greet);
}

// Maps
// maps are like objects but the only have unique value and also remeber the pattern from which they are come inside..

const map = new Map();
map.set("IN", "India");
map.set("FR", "France");
map.set("UK", "United Kindom");
// console.log(map);

for (const [key, value] of map) {
    // console.log(key , ":-", value);  
}

const obj = {
    game1: "NFS",
    game2: "Spiderman"
}
console.log(obj);

// for (const key of obj) { // From this way we can't iterate an object
//     console.log(key);
// }
