function findMissingNumber(arr) {
    let empArr = [];
    for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
      empArr.push(i);
    }
    for (let i = 0; i < empArr.length; i++) {
      let str = false;
      for (let j = 0; j < arr.length; j++) {
        if (empArr[i] == arr[j]) {
          str = true;
          break;
        }
      }
      if (str == false){
          return empArr[i];
      }
    }
  }
  console.log(findMissingNumber([1, 2, 3, 5, 6, 7, 8]));
  