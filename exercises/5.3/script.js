function createDaysOfTheWeek() {
const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
const weekDaysList = document.querySelector('.week-days');

for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDays () {
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const days = document.querySelector('#days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let element = dezDaysList[index];
        let daysInCalender = document.createElement('li');
        days.appendChild(daysInCalender);
        daysInCalender.className = 'day';
        daysInCalender.innerText = element;
    }
    
    let holidays = document.querySelectorAll('#days li');
    holidays[25].classList.add('holiday');
    holidays[26].classList.add('holiday');
    holidays[32].classList.add('holiday');
    holidays[5].classList.add('friday');
    holidays[12].classList.add('friday');
    holidays[19].classList.add('friday');
    holidays[26].classList.add('friday');
}

createDays();
// FIM Exercicio 1

function btnHoliday (Feriados) {
    let buttonsContainer = document.querySelector('.buttons-container');
    let feriado = document.createElement('button');
    feriado.id = 'btn-holiday';
    feriado.innerText = 'Feriados';
    buttonsContainer.appendChild(feriado);
    console.log(buttonsContainer);
}

btnHoliday();