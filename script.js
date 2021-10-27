const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');

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

const finishedRemovalButton = document.querySelector('#remover-finalizados');
finishedRemovalButton.addEventListener('click', () => {
  const completedTasks = document.querySelectorAll('.completed');
  for (const task of completedTasks) {
    task.remove();
  }
});

const clearButton = document.getElementById('apaga-tudo');
clearButton.addEventListener('click', () => {
  document.getElementsByTagName('ol')[0].innerHTML = '';
});

ol.addEventListener('click', (event) => {
  if (event.target === document.querySelector('#lista-tarefas')) {

  } else {
    for (let i = 0; i < ol.children.length; i += 1) {
      ol.children[i].classList.remove('selectedTask');
    }

    event.target.classList.add('selectedTask');
  }
});

ol.addEventListener('dblclick', (event) => {
  if (event.target === document.querySelector('#lista-tarefas')) {

  } else {
    event.target.classList.toggle('completed');
  }
});