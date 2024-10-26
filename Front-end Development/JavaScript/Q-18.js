function countCharacter(str) {
    const characterCount = {}; 

    for (const char of str) {

        if (char !== ' ') {
            characterCount[char] = (characterCount[char] || 0) + 1;
        }
    }

    return characterCount; 
}

const inputString = "Hello";
const result = countCharacter(inputString);
console.log(result);
