const myNums = [1, 2, 3]

// const mytotal = myNums.reduce( function (accumulator, currentvalue) {
//     console.log(`Acc: ${accumulator} and currentval: ${currentvalue}`);
//     return accumulator + currentvalue;
// }, 0);

const mytotal = myNums.reduce( (accumultor, currentvalue) => accumultor + currentvalue)

console.log(mytotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]



const total = shoppingCart.map((num) => num).reduce( (acc, currval) => {
    return acc + currval.price;
}, 0)

console.log(total);