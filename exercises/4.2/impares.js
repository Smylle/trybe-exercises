let numbers = [6, 10, 4, 20, 70, 8, 100, 2, 36, 28];
let impar = 0;

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1 ) {
        impar += 1;
    }
}

if (impar === 0) {
    console.log('nenhum valor ímpar encontrado');
}

else {
    console.log(impar);
}