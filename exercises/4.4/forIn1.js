let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  console.log("Bem-vinda,", info.personagem);

  info['recorrente'] = 'Sim';

  console.table(info);

  for (let key in info) {
    console.log(key);
}

console.log('');

  for (let index in info) {
      console.log(info[index]);
  }

  let infoPatinhas = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: 'Sim',
  }

  console.log('');

console.log(info.personagem, 'e', infoPatinhas.personagem);
console.log(info.origem, 'e', infoPatinhas.origem);
console.log(info.nota, 'e', infoPatinhas.nota);
console.log('Ambos recorrentes');



