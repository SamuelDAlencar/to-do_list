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

ol.addEventListener('click', function (event) {
  event.target.classList.add('selectedTask')
})

