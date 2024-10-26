'use strict'

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printPalindromicTriangle(rows) {
  for (let i = 1; i <= rows; i++) {
    let rowString = '';
    
    for (let j = 0; j < rows - i; j++) {
      rowString += ' ';
    }

    for (let j = i; j < 2 * i; j++) {
      rowString += j;
    }

    for (let j = 2 * i - 2; j >= i; j--) {
      rowString += j;
    }

    console.log(rowString);
  }
}

rl.question('Enter the number of rows for the palindromic triangle: ', (rows) => {
  rows = parseInt(rows, 10);

  if (!isNaN(rows) && rows > 0) {
    printPalindromicTriangle(rows);
  } else {
    console.log('Please enter a valid positive number for rows.');
  }

  rl.close();
});
