// singleton
//Object.create
//  if the object is made with constructor then it is singelton ...

// object literals

const mysym = Symbol("key1")

const JsUser = {
    name: "Shubham",
    "full name": "Shubham Malhan",
    [mysym]: "Key1",
    age: 18,
    location: "Jaipur",
    email: "shubham@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(JsUser['full name']);
// console.log(JsUser[mysym]); // to excess any symbol 

JsUser.email = "shubham.@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = "situ@google.com";
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello");
}

JsUser.greetingTwo = function () {
    console.log(`hello, ${this.name}`);
}

console.log(JsUser.greeting());
// console.log(JsUser);
console.log(JsUser.greetingTwo());
