const input = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');

button.addEventListener('click', function liCreator() {
  const liCreator = document.createElement('li')

  ol.appendChild(liCreator);
  liCreator.innerText = input.value;

  input.value = '';
})

input.addEventListener('keydown', function enterKeyAddition(event) {
  if (event.keyCode === 13) {
    const liCreator = document.createElement('li');

    ol.appendChild(liCreator);
    liCreator.innerText = input.value;

    input.value = '';
  }
})

const finishedRemovalButton = document.querySelector('#remover-finalizados');
finishedRemovalButton.addEventListener('click', function finishedTasksRemover() {
  const completedTasks = document.querySelectorAll('.completed');
  for (let key of completedTasks) {
    key.remove();
  }
});

const clearButton = document.getElementById('apaga-tudo')
clearButton.addEventListener('click', function clearButton() {
  document.getElementsByTagName('ol')[0].innerHTML = '';
});

ol.addEventListener('click', function taskSelector(event) {
  for (let i = 0; i < ol.children.length; i++) {
    ol.children[i].classList.remove('selectedTask');
  }

  event.target.classList.add('selectedTask');
})

ol.addEventListener('dblclick', function finishedToggler(event) {
  event.target.classList.toggle('completed');
});
