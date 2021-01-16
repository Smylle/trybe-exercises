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

function btnHoliday (feriados) {
    let buttonsContainer = document.querySelector('.buttons-container');
    let feriado = document.createElement('button');
    feriado.id = 'btn-holiday';
    feriado.innerText = feriados;
    buttonsContainer.appendChild(feriado);
}

btnHoliday('Feriados');
// FIM Exercicio 2

function addColorBtn () {
    let button = document.querySelector('#btn-holiday');
    let holidayColor = document.querySelectorAll('.holiday');

    button.addEventListener('click', changeColor);

    function changeColor () {
        for (let index = 0; index < holidayColor.length; index += 1) {
            const element = holidayColor[index];
            if (element.style.backgroundColor === 'lightblue') {
                element.style.backgroundColor = 'rgb(238,238,238)';
            } else {
                element.style.backgroundColor = 'lightblue';
            }
        }
    }
}

addColorBtn();
// FIM Exercicio 3

function friday (sextaFeira) {
    let buttonsContainer = document.querySelector('.buttons-container');
    let sextou = document.createElement('button');
    sextou.id = 'btn-friday';
    sextou.innerText = sextaFeira;
    buttonsContainer.appendChild(sextou);
}

friday('Sexta-Feira');