const input = document.getElementById('texto-tarefa')
const button = document.getElementById('criar-tarefa')
const ol = document.getElementById('lista-tarefas')

button.addEventListener('click', function () {
  let liCreator = document.createElement('li')

  ol.appendChild(liCreator)
  liCreator.innerText = input.value

  input.value = ''
})