let bookList = [
    { title: "Black Hole - Physics", author: "Stephen Hawking", copiesAvailable: 45 },
    { title: "Basics of Javascript", author: "Micheal Sipser", copiesAvailable: 22 },
    { title: "Neuclear Physics", author: "Tom Smith", copiesAvailable: 18 }
  ];

  function getDetails() {
      let details = [];

      for (let book of bookList) {
          details.push({
              title: book.title,
              author: book.author,
              copiesAvailable: book.copiesAvailable
          });
      }
  
      return details;
  }
  
  const result = getDetails();
  console.log(result);
  