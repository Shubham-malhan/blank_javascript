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

console.log(JsUser.email);
console.log(JsUser['email']);
console.log(JsUser['full name']);
console.log(typeof JsUser[mysym]);