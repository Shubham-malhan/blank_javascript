const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls,cryptography, network
  setTimeout(() => {
    console.log("Async Task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 is resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ userName: "chai", email: "code@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  let error = false;
  setTimeout(function () {
    if (!error) {
      resolve({ userName: "shubham", password: "123" });
    } else {
      reject("ERROR");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The Promise is Either Resolved or Rejected");
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userName: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json();
//     console.log(data);
        
//     } catch (error) {
//         console.log("ERROR:", error);
        
//     }
// }

// getAllUsers();  

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((data) => console.log(data))
.catch((error) => console.log(error))

