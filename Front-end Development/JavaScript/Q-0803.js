let bookList = [
    { title: "Black Hole - Physics", author: "Stephen Hawking", copiesAvailable: 35 },
    { title: "Basics of Javascript", author: "Micheal Sipser", copiesAvailable: 19 },
    { title: "Neuclear Physics", author: "Tom Smith", copiesAvailable: 15 }
  ];
  
  function sellBook(bookTitle, copiesToSell) {

      const book = bookList.find(book => book.title === bookTitle);
  
      if (book) {

          if (book.copiesAvailable >= copiesToSell) {
              book.copiesAvailable -= copiesToSell;  
              console.log(`Sold ${copiesToSell} copies of "${bookTitle}". Remaining copies: ${book.copiesAvailable}`);
          } else {
              console.log(`Not enough copies of "${bookTitle}" available. Only ${book.copiesAvailable} copies in stock.`);
          }
      } else {
          console.log(`Book titled "${bookTitle}" not found in the book list.`);
      }
  }
  
  sellBook("Basics of Javascript", 15); 
  sellBook("Black Hole - Physics", 36); 
  sellBook("Neuclear Physics", 12); 
  sellBook("Chemical Engineering", 25); 
  