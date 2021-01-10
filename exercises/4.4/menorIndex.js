function menor (myList) {
    let result = 0;

        for (let key in myList) {
          if (myList[result] > myList[key]) {
            result = key;
          }
        }
        return result;
      }        

console.log(menor([2, 4, 6, 7, 10, 0, -3]));
