function createBookList(bookTitles, authorNames, numberOfCopiesAvailable) {
    const bookList = [];

    // Loop through the arrays and combine the data into book objects
    for (let i = 0; i < bookTitles.length; i++) {
        const book = {
            title: bookTitles[i],
            author: authorNames[i],
            copiesAvailable: numberOfCopiesAvailable[i]
        };
        bookList.push(book);
    }

    return bookList;
}

// Example usage:
const bookTitles = ["The Great Gatsby", "1984", "To Kill a Mockingbird"];
const authorNames = ["F. Scott Fitzgerald", "George Orwell", "Harper Lee"];
const numberOfCopiesAvailable = [5, 8, 3];

const result = createBookList(bookTitles, authorNames, numberOfCopiesAvailable);
console.log(result);
