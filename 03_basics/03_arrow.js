const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the website.`);
    }
}

// user.welcomeMessage();
// user.username = "shubham";
// user.welcomeMessage();

// console.log(user["welcomeMessage"]) ;

// var x = 23;

// console.log(this);

// function chai() {
//     let username = "shubham";
//     console.log(this.username);
// }

// chai("shubham");

// const chai = function () {
//     let username = "shubham";
//     console.log(this.username); 
// }

const chai =  () => {
    let username = "shubham";
    console.log(this); 
}

// chai();

// arrow function 
// () => {} this is how arrow function is defined and used and we can store this arrow function in any variable we want to store them and use them ...
// like this in explicit arrow function 
// const hii = () => {
    // return
//    };

// Implicit arrow function
// const add = (num1, num2) => num1+num2



// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) => num1 + num2;

// other way of writing the implicit arrow function

const addTwo = (num1, num2) => (num1 + num2);


console.log(addTwo(3, 4));

// array.forEach(element => {
    
// });