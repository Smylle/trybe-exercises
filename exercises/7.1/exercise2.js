const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sortoddsAndEvens = oddsAndEvens.sort(function(a, b) {
    return a - b;
});

console.log(`Este são os numeros ordenados ${sortoddsAndEvens}`);
