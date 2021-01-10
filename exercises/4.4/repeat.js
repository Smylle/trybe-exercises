// function repeat (numeros) {
//     let resultado = 0;
//     let contador = 0;

//     for (let index in numeros) {
//         for (let index2 in numeros){
//             if (numeros[index] === numeros[index2]){
//                 contador += 1;
//             }
//         }       
//     }
//     return contador;
// }

// console.log(repeat([2, 3, 2, 5, 8, 2, 3]));

function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero++;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
  }
  
console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));
