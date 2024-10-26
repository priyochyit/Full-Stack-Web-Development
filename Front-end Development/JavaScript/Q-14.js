function printTriangle(givenInput) {
    for (let i = 1; i <= givenInput; i++) {
      let space = " ".repeat(givenInput - i);
      let pattern = "*".repeat(i) + "*".repeat(i - 1);
  
      console.log(space + pattern);
    }
  }
  
  showTriangle = printTriangle(5);
 