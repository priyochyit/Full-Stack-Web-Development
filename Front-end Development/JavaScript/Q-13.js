function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}

function findPrimeNumbers(arr) {

    return arr.filter(isPrime);
}

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = findPrimeNumbers(numbers);
console.log(primeNumbers); 
