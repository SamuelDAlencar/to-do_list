const input = document.getElementById('texto-tarefa')
const button = document.getElementById('criar-tarefa')
const ol = document.getElementById('lista-tarefas')


button.addEventListener('click', function () {
  let liCreator = document.createElement('li')

  ol.appendChild(liCreator)
  liCreator.innerText = input.value
  liCreator.classList.add('liStyles')

  input.value = ''
})

input.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    let liCreator = document.createElement('li')

    ol.appendChild(liCreator)
    liCreator.innerText = input.value
    liCreator.classList.add('liStyles')

    input.value = ''
  }
})

let clearButton = document.getElementById('apaga-tudo')

clearButton.addEventListener('click', function () {
  for (let i = document.getElementsByTagName('li').children.length; i === document.getElementsByTagName('li').children.length; i--) {
    document.getElementsByTagName('li')[i].remove();
  }
})

ol.addEventListener('click', function (event) {
  for (let i = 0; i < ol.children.length; i++) {
    ol.children[i].classList.remove('selectedTask')
  }

  event.target.classList.add('selectedTask')
})

let undo = 0

ol.addEventListener('dblclick', function (event) {
  if (undo === 0) {
    event.target.classList.add('completed')

    undo = 1
  } else if (undo === 1) {
    event.target.classList.remove('completed')

    undo = 0
  }
})
