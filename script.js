/* eslint-disable no-restricted-syntax */

const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');

// Função para criar tarefa

button.addEventListener('click', () => {
  const liCreation = document.createElement('li');

  ol.appendChild(liCreation);
  liCreation.innerText = input.value;

  input.value = '';
});

input.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    const liCreation = document.createElement('li');

    ol.appendChild(liCreation);
    liCreation.innerText = input.value;

    input.value = '';
  }
});

// -----------------------------------------------------------------------------

// Função que remove as tarefas finalizadas

const finishedRemovalButton = document.querySelector('#remover-finalizados');
finishedRemovalButton.addEventListener('click', () => {
  const completedTasks = document.querySelectorAll('.completed');
  for (const task of completedTasks) {
    task.remove();
  }
});

// -----------------------------------------------------------------------------

// Função que apaga todas as tarefas

const clearButton = document.getElementById('apaga-tudo');
clearButton.addEventListener('click', () => {
  document.getElementsByTagName('ol')[0].innerHTML = '';
});

// -----------------------------------------------------------------------------

// Função que seleciona uma tarefa

ol.addEventListener('click', (event) => {
  if (event.target !== document.querySelector('#lista-tarefas')) {
    for (let i = 0; i < ol.children.length; i += 1) {
      ol.children[i].classList.remove('selectedTask');
    }
    event.target.classList.add('selectedTask');
  }
});

// -----------------------------------------------------------------------------

// Função que marca uma tarefa como finalizada

ol.addEventListener('dblclick', (event) => {
  if (event.target !== document.querySelector('#lista-tarefas')) {
    event.target.classList.toggle('completed');
  }
});
