function getMaxProduct(arr) {
    if (arr.length < 2) {
        throw new Error("Array must contain at least two elements.");
    }

    let max1 = -Infinity; 
    let max2 = -Infinity; 

    for (let num of arr) {
        if (num > max1) {
            max2 = max1;
            max1 = num;  
        } else if (num > max2 && num !== max1) {
            max2 = num; 
        }
    }

    return max1 * max2;
}

const numbers = [2, 3, 5, 6, 7];
const maxProduct = getMaxProduct(numbers);
console.log(maxProduct); 
