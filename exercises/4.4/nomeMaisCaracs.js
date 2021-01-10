function nomeMaisCaracs (listNames) {
    let result = listNames[0];
    for (let key in listNames){
        if (result.length < listNames[key].length) {
            result = listNames[key];
        }
    }
    return result;
}

console.log(nomeMaisCaracs(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));