function parseString(...arg) {
    for (let i = 0; i < arg.length; i++) {
      if (/\d/.test(arg[i])) {
        let result = arg.reduce((acc, cur) => {
          number_1 = Number(acc);
          number_2 = Number(cur);
          return (number_1 += number_2);
        }, 0);
        return result;
      } else {
        let result = arg.join(" ");
        return result;
      }
    }
  }
  console.log(parseString("21", "24", "40"));
  console.log(parseString("Hello", "Alpha"));
  console.log(parseString("Summer", "2022"));
