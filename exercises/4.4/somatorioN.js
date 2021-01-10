function somatorioN (numero) {
    let result = 0;

    for (let index = 1; index <= numero; index += 1) {
        result += index;
    }

    return result;
}

console.log(somatorioN(5));