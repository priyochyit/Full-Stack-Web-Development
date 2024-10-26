function findMedian(numbers) {

    numbers.sort((a, b) => a - b);
    
    const length = numbers.length;

    if (length % 2 === 0) {
        const mid1 = numbers[length / 2 - 1];
        const mid2 = numbers[length / 2];
        return (mid1 + mid2) / 2; 
    } else {
        return numbers[Math.floor(length / 2)]; 
    }
}

const nums = [5, 2, 8, 1, 9]; 
const medianValue = findMedian(nums);
console.log(medianValue); 
