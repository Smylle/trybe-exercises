function maior (myList) {
    let result = 0;

        for (let key in myList) {
          if (myList[result] < myList[key]) {
            result = key;
          }
        }
        return result;
      }        

console.log(maior([2, 3, 6, 7, 10, 1]));