//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let myArray = [];
let result = 0;

for (let index = 1; index <= 25; index += 1) {
    myArray.push(index);
    result = index / 2;
    console.log(result);
}
