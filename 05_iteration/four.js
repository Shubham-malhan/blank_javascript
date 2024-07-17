const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
} 

for (const key in myObject) {
    // console.log(key, "used for", myObject[key]);  
}

const map = new Map();
map.set("IN", "India");
map.set("FR", "France");

// console.log(map);

// for (const key in map) { // Not working in map..
//     console.log(map[key]);
// }