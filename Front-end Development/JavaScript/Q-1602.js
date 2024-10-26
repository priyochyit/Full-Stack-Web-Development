function isFibonacciNumber(num) {

    function isPerfectSquare(x) {
        const s = Math.sqrt(x);
        return (s * s === x);
    }

 
    return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
}

const numberToCheck = 8;
const result = isFibonacciNumber(numberToCheck);
console.log(result);
