function verificaPalindrome (string) {
    let palavra = string;
    let result = true;
    for (let index = 0; index < palavra.length; index += 1) {
        let element = palavra[index];
        if (element === palavra[palavra.length - index - 1]) {
            result = true;
        }

        else {
            result = false;
        }
        
    }
    return result;
    
}

console.log(verificaPalindrome('desenvolvimento'));
console.log(verificaPalindrome('arara'));
