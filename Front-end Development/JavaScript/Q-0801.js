function createBookList(bookTitles, authorNames, numberOfCopiesAvailable) {
    const bookList = [];

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

const bookTitles = ["Black Hole - Physics", "Neuclear Physics", "Basics of Javascript"];
const authorNames = ["Stephen Hawking", "Tom Smith", "Micheal Sipser"];
const numberOfCopiesAvailable = [15, 20, 45];

const result = createBookList(bookTitles, authorNames, numberOfCopiesAvailable);
console.log(result);
