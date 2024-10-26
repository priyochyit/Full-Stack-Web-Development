function getPositiveNumbers(arr) {

    return arr.filter(num => num > 0);
}

const numbers = [2, -5, 10, -3, 8, -1, 0, 7];
const positiveNumbers = getPositiveNumbers(numbers);
console.log(positiveNumbers); 

