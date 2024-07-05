// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getDay());
// console.log(myDate.getTime());

const newDate =  Date.now();
console.log(newDate);
// console.log(typeof newDate);
// console.log(typeof myDate);

const mycreatedDate = new Date(2004,4,12 );
console.log(mycreatedDate.toLocaleString());



let myBirthdate = `${mycreatedDate.getDate()} ${mycreatedDate.getMonth()+1} ${mycreatedDate.getFullYear()}`
console.log(myBirthdate);