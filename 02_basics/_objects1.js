// const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstName: "shubham",
            lastName: "malhan"
        }
    }
}
 
// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {
    1: "a",
    2: "b"
};

const obj2 = {
    3: "c",
    4: "d"
};

const obj4 = {4: "e", 5: "f"};

// const obj3 = Object.assign({}, obj1 , obj2, obj4);

const obj3 = {...obj1, ...obj2, ...obj4};

// console.log(obj3);

// obj1.concat(obj2);

// console.log(obj1);

const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    }
]

// users[1].email = 'Situ@gmail.com'
// console.log(users[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // check the keys .
// console.log(Object.values(tinderUser)); // check the values of the key.
// console.log(Object.entries(tinderUser)); // displays the key and the value of the object and separate them one by one.

// console.log(tinderUser.hasOwnProperty('name')); check the keys

const course = {
    courseName: "JS in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

const {courseInstructor : instructor} = course; //  This is how we can de-structure an object and now we can use this value anywhere i want to use and also i change the name of my course key from cousreInstructor to instructor.

console.log(instructor);

{
    "hi": {
    "name": "hitesh",
    "coursename": "Js in hindi",
    "price": "free"
    },
    "hello": {
        "name": "hitesh",
        "coursename": "Js in hindi",
        "price": "free"
        }
}

[
    {},
    {},
    {}
]