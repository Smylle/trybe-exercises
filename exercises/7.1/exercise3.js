const fatorial = (numero) => {
    let resultado = 1;

    for (let index = 1; index <= numero; index++) {
        resultado *= index;        
    }
    return resultado;
}

console.log(fatorial(4));