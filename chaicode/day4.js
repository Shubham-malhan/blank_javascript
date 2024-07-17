// Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
  // console.log(i);
}

// Write a program to print the multiplication table of 5 using a for loop.

for (let i = 5; i <= 5; i++) {
  //(why?)
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

// Write a program to calculate the sum of numbers from 1 to 10 using a while loop.\
let val = 0;
let i = 1;
while (i <= 10) {
  // console.log(i);
  val = val + i;
  // console.log(val);
  i++;
}
// console.log(val);

//Write a program to print number from 10 to 1 using a while loop.

while (i >= 1) {
  // console.log(i);
  i--;
}

// Write a program to print numbers from 1 to 5 using a do...while loop.

i = 1;
do {
  // console.log(i);
  i++;
} while (i <= 5);

// Write a program to calculate the factorial of a number using a do...while loop.
val = 1;
i = 1;
let num = 5;
do {
  val = val * i;
  i++;
} while (i <= num);

// console.log(val);

// Write a program to print a pattern using nested for loops:

for (let i = 1; i <= 5; i++) {
    let star = '';
  for (let j = 1; j <= i; j++) {
    // console.log("j" ,j);
    star = "*" + star;
  }
//   console.log(star);
} 

// Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let i = 1; i <= 10; i++) {
    if ( i == 5){
        continue;
    }
    // console.log(i);
    
}

// Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for (let i = 1; i <= 10; i++) {
    if (i == 7){
        break;
    }
    console.log(i);
    
}
