const input = document.getElementById('texto-tarefa')
const button = document.getElementById('criar-tarefa')
const ol = document.getElementById('lista-tarefas')


button.addEventListener('click', function () {
  let liCreator = document.createElement('li')

  ol.appendChild(liCreator)
  liCreator.innerText = input.value

  input.value = ''
})

input.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    let liCreator = document.createElement('li')

    ol.appendChild(liCreator)
    liCreator.innerText = input.value

    input.value = ''
  }
})

let xDone = document.querySelector('#remover-finalizados');
xDone.addEventListener('click', function () {
  let doneArr = document.querySelectorAll('.completed');
  for (let key of doneArr) {
    key.remove();
  }
});

const clearButton = document.getElementById('apaga-tudo')
clearButton.addEventListener('click', function () {
  document.getElementsByTagName('ol')[0].innerHTML = ''
})

ol.addEventListener('click', function (event) {
  for (let i = 0; i < ol.children.length; i++) {
    ol.children[i].classList.remove('selectedTask')
  }

  event.target.classList.add('selectedTask')
})

let undo = 0

ol.addEventListener('dblclick', function (event) {
  event.target.classList.toggle('completed')
})

