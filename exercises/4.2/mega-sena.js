// REGRA DE NEGOCIO DA MEGA SENA
// 6 NUMEROS SORTEADOS ALEATORIAMENTE
// NUMEROS ESSES, DE 1 A 60.
// ACERTOS DE 4 A 6

let megaSenaNumbers = [];

//otimizando meu código de geração de números.
for (let index = 0; index < 6; index += 1){
    megaSenaNumbers.push(Math.ceil(Math.random() * 60));
}
// let firstNumber = Math.ceil(Math.random() * 60);
// let secondNumber = Math.ceil(Math.random() * 60);
// let thirdNumber = Math.ceil(Math.random() * 60);
// let fourthNumber = Math.ceil(Math.random() * 60);
// let fifthNumber = Math.ceil(Math.random() * 60);
// let sixthNumber = Math.ceil(Math.random() * 60);

// megaSenaNumbers.push(firstNumber);
// megaSenaNumbers.push(secondNumber);
// megaSenaNumbers.push(thirdNumber);
// megaSenaNumbers.push(fourthNumber);
// megaSenaNumbers.push(fifthNumber);
// megaSenaNumbers.push(sixthNumber);
//________________________________________________________________fim da otimização

let myGame = [7, 10, 22, 33, 40, 55];

let numberOfHits = 0;

// ESTRUTURA DE REPETIÇÃO
for (let index = 0; index < megaSenaNumbers.length; index += 1){
    for (let gameIndex = 0; gameIndex < myGame.length; gameIndex += 1){
        if (megaSenaNumbers[index] === myGame[gameIndex]){
            //temos um numero acertado aqui ^
            numberOfHits += 1;
        }
    }
}

console.log('Total de acertos:', numberOfHits);
console.log('O jogo sorteado é: ', megaSenaNumbers);
console.log('O MEU jogo é :', myGame);
