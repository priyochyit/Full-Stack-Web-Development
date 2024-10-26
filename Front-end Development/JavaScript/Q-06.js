function getFirstWord(str) {

    const words = str.split(' ');
    return words[0];
}

const result = getFirstWord("The quick brown fox jumps over the lazy dog");
console.log(result); 
