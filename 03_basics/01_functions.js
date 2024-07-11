function printMyName() {
    console.log('S');
    console.log('h');
    console.log('u');
    console.log('b');
    console.log('h');
    console.log('a');
    console.log('m');
}

// printMyName(); // use the function.

// function addTwoNumbers(number1,number2){ 
//     console.log(number1 + number2);
// } //  In this funtion we don't return any value so we don't store the value of this funtion and if we want to store the value in any variable it will give me back undefined and console only help me to print on my console...

function addTwoNumbers(number1,number2){
    // console.log(number1 + number2);
    return number1 + number2;
}

const result = addTwoNumbers(3, 4);

// console.log("Result:", result);

function loginUserMessage(username = "User"){
    if(!username){
        console.log("Please enter the username:");
        return;
    }
    return `${username} just Logged in`;
}

console.log(loginUserMessage()); 