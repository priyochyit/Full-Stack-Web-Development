function fibonacciSequence(n) {
    
    if (n <= 0) return []; 
    if (n === 1) return [0]; 
    if (n === 2) return [0, 1]; 

    const fibArray = [0, 1]; 

    for (let i = 2; i < n; i++) {
        const nextFib = fibArray[i - 1] + fibArray[i - 2]; 
        fibArray.push(nextFib); 
    }

    return fibArray; 
}

const n = 8; 
const fibonacciNumbers = fibonacciSequence(n);
console.log(fibonacciNumbers); 
