const books = {
    tittle: "java",
    author: "shubham",
    year: 2004,
}

// console.log(books);

// console.log(books.tittle);
// console.log(books.author);

books.myfun = () => {
    console.log(`${books.tittle} and ${books.author}`);
}

// console.log(books);
// books.myfun();

books.updateYear = (year) => {
    books.year = year;
    // console.log(this);
}

// console.log(books);
// books.updateYear(2002);
// console.log(books);











books.call = function (){
    return this.tittle + " " + this.author;
}

// console.log(books.call());


for (const key in books) {
    // console.log(books[key]
    // );
}

console.log(Object.keys(books));
console.log(Object.values(books));


