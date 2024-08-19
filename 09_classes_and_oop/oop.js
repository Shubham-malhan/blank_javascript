// const user = {
//     userName: "shubham",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         console.log("Got user details form database ");
//     }
// }

// console.log(user.getUserDetails());

function User (userName, loginCount, signedIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
}

const Userone = new User("shubham", 8, true);
console.log(Userone);
