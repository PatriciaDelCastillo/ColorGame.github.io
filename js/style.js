let colors = []
let square = document.querySelectorAll(".square")
let colorDisplay = document.querySelector("#colorDisplay")
let mensaje = document.querySelector('#message')
let h1 = document.querySelector('h1')
let pickedColor
let reset = document.querySelector('#reset')
let stripe = document.querySelector('#stripe')
let num
let botInicial = document.querySelectorAll('.botInicial')

StartPlay();


function StartPlay() {
  num = 6
  colors = generateRandomColors(num)
  pickedColor = pickColor(num)
  colorDisplay.textContent = pickedColor
  reset.textContent = 'New Colors'
  for (let i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.background = colors[i]
    }
  }
}

function botonHard() {
  num = 6
  botInicial[0].classList.add('selected')
  botInicial[1].classList.remove('selected')
  colors = generateRandomColors(num)
  pickedColor = pickColor(num)
  colorDisplay.textContent = pickedColor
  reset.textContent = 'New Colors'
  for (let i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.background = colors[i]
      square[i].style.display = 'block'
    }

  }
  juguemos()
  resetear()

}

function botonEasy() {

  num = 3
  botInicial[1].classList.add('selected')
  botInicial[0].classList.remove('selected')
  colors = generateRandomColors(num)
  pickedColor = pickColor(num)
  colorDisplay.textContent = pickedColor
  reset.textContent = 'New Colors'
  for (let i = 0; i < square.length; i++) {
    if (colors[i] != undefined) {
      square[i].style.background = colors[i]
    } else {
      square[i].style.display = 'none'

    }
  }
  juguemos()
  resetear()
}
for (let i = 0; i < botInicial.length; i++) {
  botInicial[i].addEventListener('click', function () {
    if (botInicial[i] == botInicial[0]) {
      botonHard()
    } else {
      botonEasy()
    }
  })
}




function resetear() {

  reset.addEventListener("click", function () {
    colors = generateRandomColors(num)
    pickedColor = pickColor(num)
    colorDisplay.textContent = pickedColor
    reset.textContent = 'New Colors'
    for (let i = 0; i < square.length; i++) {
      if (colors[i]) {
        square[i].style.background = colors[i]
      }
    }

  })
}

function juguemos() {
  for (let i = 0; i < square.length; i++) {
    square[i].addEventListener('click', function () {
      let clickedColor = this.style.background
      if (picked === clickedColor) {
        h1.style.backgroundColor = clickedColor
        changeColors(clickedColor)
        mensaje.textContent = 'Correcto.!!!!'
        newPlay()
      } else {
        this.style.background = 'transparent'
        mensaje.textContent = 'Try Again'
      }
    })
  }
}

function changeColors(clickedColor) {
  for (let i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = clickedColor
  }

}
///es el random de los de los arreglos de colores
function pickColor(num) {

  picked = colors[Math.floor(Math.random() * num)]
  return picked

}


function randomColor() {
  let num = Math.floor(Math.random() * 0xffffff);
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function generateRandomColors(num) {
  let array = []
  for (let i = 0; i < num; i++) {
    array[i] = randomColor()
  }
  return array
}

function newPlay() {
  reset.textContent = 'Play Again ?'
  reset.addEventListener('click', function () {
    mensaje.textContent = ''
    h1.style.backgroundColor = ''


  })
}