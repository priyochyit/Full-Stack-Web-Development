function removeDuplicates(names) {

    const uniqueNames = [...new Set(names)];
    
    return uniqueNames;
}

const namesArray = ["Alice", "Bob", "Alice", "Charlie", "Bob"];
const result = removeDuplicates(namesArray);
console.log(result); 
