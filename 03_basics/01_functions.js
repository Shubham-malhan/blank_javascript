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

// console.log(loginUserMessage()); 
// console.log(loginUserMessage("Shubham"));

function calculateCartPrice(...num1){ // Rest operator (...) 
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
handleObject({
    username: "shubham",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
 
function returnSecondValue(getArray){ 
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));