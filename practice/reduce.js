const arr = [1, 2, 3, 4, 55, 0, 100, 9,105,33];

const finalValue = arr.reduce( (accumlator, currentValue) => accumlator + currentValue);

console.log(finalValue);