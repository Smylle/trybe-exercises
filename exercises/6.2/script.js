// estruturas de repetição para gerar os <option> dos estados do brasil.
function createStates () {

    let states = ['Estado', 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

    const selectState = document.querySelector("#states");

    for (let index = 0; index < states.length; index += 1) {
        let estados = document.createElement('option');
        selectState.appendChild(estados).innerHTML = states[index];
    }
}
createStates();

document.getElementById('date').DatePickerX.init();
