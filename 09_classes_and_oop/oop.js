const user = {
    userName: "shubham",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details form database ");
    }
}

// console.log(user.getUserDetails());

function User (userName, loginCount, signedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
}

const Userone = new User("shubham", 8, true);
const UserTwo = new User("situ", 10, false);
// console.log(Userone);
// console.log(UserTwo);

// when new keyword is used an empty object is created that is know as instance.
// Step 1 - object is created
// Step 2 - constructor function is called which pack our arrgument 
// Step 3 - Our argument get injected to this keyword
// Step 4 - Get the Value or result 


console.log(Userone.constructor);


