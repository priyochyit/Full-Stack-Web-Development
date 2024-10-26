let bookList = [
    { title: "Black Hole - Physics", author: "Stephen Hawking", copiesAvailable: 9 },
    { title: "Basics of Javascript", author: "Micheal Sipser", copiesAvailable: 15 },
    { title: "Neuclear Physics", author: "Tom Smith", copiesAvailable: 5 }
  ];

  function addCopies(bookTitle, copiesToAdd) {

      const book = bookList.find(book => book.title === bookTitle);
  
      if (book) {

          book.copiesAvailable += copiesToAdd;
          console.log(`Added ${copiesToAdd} copies to "${bookTitle}". Total copies: ${book.copiesAvailable}`);
      } else {
          console.log(`Book titled "${bookTitle}" not found in the list.`);
      }
  }
  
  addCopies("Basics of Javascript", 22); 
  addCopies("Black Hole - Physics", 16); 
  addCopies("Neuclear Physics", 10); 
  