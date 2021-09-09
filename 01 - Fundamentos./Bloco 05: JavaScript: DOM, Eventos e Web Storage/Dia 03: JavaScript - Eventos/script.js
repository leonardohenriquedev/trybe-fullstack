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

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDays(array) {
  let listaDeDias = document.getElementById('days');

  for (let index = 0; index < array.length; index += 1) {
    let dia = document.createElement('li');
    dia.innerText = array[index];
    dia.className = 'day';
    listaDeDias.appendChild(dia);
    if (array[index] === 24 || array[index] === 25 || array[index] === 31) {
      dia.classList.add('holiday');
    }
    if (array[index] === 04 || array[index] === 11 || array[index] === 18 || array[index] === 25) {
      dia.classList.add('friday');
    }
  }
}

createDays(dezDaysList);


let buttonName = 'Feriados';

function createButton(string) {
  let botao = document.createElement('button');
  botao.innerText = string;
  botao.id = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(botao);
}

createButton(buttonName);

let botao = document.getElementById('btn-holiday');
botao.addEventListener('click', function() {
  let dias = document.querySelectorAll('.holiday');
  for (let index = 0; index < dias.length; index++) {
    dias[index].style.backgroundColor = 'pink';
  }
})

let buttonName2 = 'Sexta-feira';

function createButtonFriday(string) {
  let botao = document.createElement('button');
  botao.innerText = string;
  botao.id = 'btn-friday';
  document.querySelector('.buttons-container').appendChild(botao);
}

createButtonFriday(buttonName2);

let botaoSexta = document.getElementById('btn-friday');
botaoSexta.addEventListener('click', function() {
  let sextas = document.querySelectorAll('.friday');
  for (let index = 0; index < sextas.length; index++) {
    sextas[index].innerText = 'ITS FRIDAY THEN';
  }
})

let dias = document.querySelectorAll('#days .day');

function zoomIn() {
  for (let index = 0; index < dias.length; index++) {
    dias[index].addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
    })

  }
}

function zoomOut() {
  for (let index = 0; index < dias.length; index++) {
    dias[index].addEventListener('mouseout', function(event) {
      event.target.style.fontSize = '20px';
    })
  }
}

zoomIn();
zoomOut();

let task = 'Cozinhar';

function addTask(string) {
  let element = document.createElement('span');
  element.innerText = string;
  document.querySelector('.my-tasks').appendChild(element);
}

addTask(task);

let color = 'green';

function addColor(string) {
  let element = document.createElement('div');
  element.className = 'task';
  element.style.backgroundColor = string;
  document.querySelector('.my-tasks').appendChild(element);
}

addColor(color);