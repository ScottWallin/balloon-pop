let startButton = document.getElementById('start-button')
let inflateButton = document.getElementById('inflate-button')

let clickCount = 0
let height = 120
let width = 100
let inflationRate = 20
let maxsize = 300
let popCount = 0

function startGame() {
  startButton.setAttribute("disabled", "true")
  inflateButton.removeAttribute("disabled")

  setTimeout(() => {
    console.log("it's been three seconds")

    inflateButton.setAttribute("disabled", "true")
    startButton.removeAttribute("disabled")

clickCount = 0
height = 120
width = 100

draw()
  
  }, 3000)
}
  


function inflate() {
  clickCount++
  height += inflationRate
  width += inflationRate
  
  if (height >= maxsize){
    console.log("pop the balloon")
    popCount++
    height = 0
    width = 0
  }
  draw()
}


function draw(){
  let balloonElement = document.getElementById("balloon")
  let clickCountElem = document.getElementById("click-count")
  
  balloonElement.style.height = height + "px"
  balloonElement.style.width = width + "px"
  let popCountElem = document.getElementById('pop-count')
  
  clickCountElem.innerText = clickCount.toString()
  
  popCountElem.innerText = popCount.toString()
}