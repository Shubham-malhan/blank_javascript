let num = 0;

if (num > 0) {
  console.log("Number is positive :");
} else if (num == 0) {
  console.log("Number is a zero :");
} else {
  console.log("number is negative :");
}

let age = 18;

if (age >= 18) {
  console.log("You can vote :");
} else {
  console.log("You can't vote :");
}

let num1 = 100;
let num2 = 300;
let num3 = 1000;

if (num1 > num2 && num1 > num3) {
  console.log("number 1 is greater");
} else if (num2 > num3 && num2 > num1) {
  console.log("number 2 is greater");
} else {
  console.log("number 3 is greater");
}

let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thrusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("enter the write value");
    break;
}

let num4 = 2;

let isEvenOrOdd = num4 % 2 == 0 ? "Even" : "Odd";
console.log(isEvenOrOdd);
// console.log(num4);

let year = 700;

if (year >= 400 && year % 400 == 0) {
  console.log("It is a leap year");
} else if (year < 400 && year % 4 == 0) {
  console.log("It is a leap year");
} else {
  console.log("It is not a leap year");
}

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("This is a leap year");
} else {
  console.log("This is not a leap year");
}

// Grade

let score = 88;

// let grade = marks /10;
// console.log(grade);
//  let gradeValue = Math.floor(grade);

switch (true) {
  case (score <= 100 && score >= 90):
    console.log("A");
    break;
  case (score <= 89 && score >= 80):
    console.log("B");
    break;
  case (score <= 79 && score >= 70):
    console.log("C");
    break;
  case (score <= 69 && score >= 60):
    console.log("D");
    break;
  case (score <= 59 && score >= 50):
    console.log("E");
    break;
  default:
    console.log("Fail");
    break;
}
