const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')
const container = document.querySelectorAll('.container')

const colors = [
  'rgb(29, 224, 211)',
  'rgb(57, 247, 10)',
  'rgb(242, 104, 219)',
  'rgb(99, 2, 13)',
  'rgba(237, 214, 9, 0.6)',
]

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)


for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}


function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend (event) {
    event.target.className = 'item'
}


function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
	container.style.background = getRandomColor()
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}


