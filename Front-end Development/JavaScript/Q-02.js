function countEvenPairs(input) {
    let count = 0;

    for (let i = 0; i < input.length - 1; i++) {
        const letter = input[i];
        const digit = input[i + 1];

        if (isNaN(letter) && !isNaN(digit)) {

            if (digit % 2 === 0) {
                count++;
            }
        }
    }

    return count;
}

const result = countEvenPairs("x1y2z3");
console.log(result);
