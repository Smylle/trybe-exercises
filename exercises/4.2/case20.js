let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (index = 0; index < numbers.length; index += 1) {
    soma += numbers[index] / numbers.length;
}

console.log(soma);

if (soma < 20) {
    console.log('Número menor que 20');
}
else {
    console.log('Número maior que 20');
}
