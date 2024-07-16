// For

for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(index);
} 


// Loop to print the table
for (let i = 1; i <= 10; i++) {
    // console.log(`\nTable of ${i}\n`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i * j}`);   
    }  
}

let myArray = ["flash", "batman", "superman"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     // const element = array[index];
//     if (index == 5) {
//         console.log("detected 5");
//         break;
//     }
//     console.log(index);

// }

for (let index = 1; index <= 20; index++) {
    // const element = array[index];
    if (index == 5) {
        console.log("detected 5");
        continue; // give one change and excute the statement from the next index;
    }
    console.log(index);

}