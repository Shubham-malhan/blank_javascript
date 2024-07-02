console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); 
// Because check operator (==) and comparsion operator (<,>,<=,>=) work differently
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true ans (1) null > 0 is false.

//newer compare two different datatype convert them first.
