let bruteSalary = 3000.00;
let parcialSalary = 0;
let inssImposto = 0;


if (bruteSalary > 0 && bruteSalary <= 1556.94) {
    inssImposto = 0.08;
    console.log('INSS: 8%');
    parcialSalary = bruteSalary - (bruteSalary * inssImposto);
    console.log('Salário parcial é:',parcialSalary);
}

else if (bruteSalary > 1556.94 && bruteSalary <= 2594.92) {
    inssImposto = 0.09;
    console.log('INSS: 9%');
    parcialSalary = bruteSalary - (bruteSalary * inssImposto);
    console.log('Salário parcial é:',parcialSalary);
}

else if (bruteSalary > 2594.92 && bruteSalary <= 5189.82) {
    inssImposto = 0.11;
    console.log('INSS: 11%');
    parcialSalary = bruteSalary - (bruteSalary * inssImposto);
    console.log('Salário parcial é:',parcialSalary);
}

else if (bruteSalary > 5189.82) {
    console.log('Alíquota Máxima definida igual a: R$ 570,88');
    parcialSalary = bruteSalary;
    parcialSalary -= 570.88;
    console.log('Salário parcial é:',parcialSalary);
}

else {
    console.log('Digite seu salário no formato 1000.00');
}


let impostoDeRenda = 0;
let liquidSalary = 0;
let deduction = 0;
let parcela = 0;

if (parcialSalary > 0 && parcialSalary <= 1903.98 ) {
    console.log('Isento de imposto de renda');
}

else if (parcialSalary > 1903.99 && parcialSalary <= 2826.65 ) {
    parcela = 142.80;
    impostoDeRenda = 0.075;
    console.log('IR: 7,5%');
    deduction = (impostoDeRenda * parcialSalary) - parcela;
    console.log('Sua dedução é R$:', deduction);
    liquidSalary = parcialSalary - deduction;
    console.log('Salário liquido é:', liquidSalary);
}

else if (parcialSalary > 2826.66 && parcialSalary <= 3751.05 ) {
    parcela = 354.80;
    impostoDeRenda = 0.15;
    console.log('IR: 15%');
    deduction = (impostoDeRenda * parcialSalary) - parcela;
    console.log('Sua dedução é R$:', deduction);
    liquidSalary = parcialSalary - deduction;
    console.log('Salário liquido é:', liquidSalary);
}

else if (parcialSalary > 3751.06  && parcialSalary <= 4664.68 ) {
    parcela = 636.13;
    impostoDeRenda = 0.225;
    console.log('IR: 22,5%');
    deduction = (impostoDeRenda * parcialSalary) - parcela;
    console.log('Sua dedução é R$:', deduction);
    liquidSalary = parcialSalary - deduction;
    console.log('Salário liquido é:', liquidSalary);
}

else if (parcialSalary > 4664.69 ) {
    parcela = 869.36;
    impostoDeRenda = 0.275;
    console.log('IR: 27,5%');
    deduction = (impostoDeRenda * parcialSalary) - parcela;
    console.log('Sua dedução é R$:', deduction);
    liquidSalary = parcialSalary - deduction;
    console.log('Salário liquido é:', liquidSalary);
}

else {
    console.log('Verifique as informações inseridas');
}

console.log(liquidSalary);