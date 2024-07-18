// write a function to check if a number is even or odd and log the result to the console.

function num(number){
    return number%2 == 0 ? console.log("even") : console.log("Odd")
}


// num(2);

//Write a function to calculate the square of a number and return the result.

function sqr(num){
    return num*num ;
}

// console.log(sqr(2));

// Write a function expression to find the maximum of to numbers and return to the console.



function max(num1, num2){
    if(num1 > num2){
        return `number ${num1} is greater `
    }else {
        return `number ${num2} is greater`
    }
}

// console.log(max (31, 4));

// Write a function expression to concatenate two strings and return the result.

function concat(str1, str2){
    return str1 + " " + str2;
}

// console.log(concat("hii i am here", "where are you"));

// Write an arrow function to calculate the sum of two numbers and return the result.

let sum = (num1, num2) => (num1 + num2);

// console.log(sum(1, 12));

// Write an arrow function to check if a string contains a specific character and return a boolean value. 

let specific = (str, value) => {
    if(str.includes(value)){
        return true;
    }else {
        return false;
    }
}



// console.log(specific(""));





