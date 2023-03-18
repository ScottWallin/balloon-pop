let clickCount = 0
let height = 120
let width = 100
let inflationRate = 20
let maxsize = 300
let popCount = 0

function startGame() {
  console.log("time to start")
}
  


function inflate() {
  clickCount++
  let balloonElement = document.getElementById("balloon")
  height += inflationRate
  width += inflationRate
  
  if (height >= maxsize){
    console.log("pop the balloon")
    popCount++
    height = 0
    width = 0
    document.getElementById('pop-count').innerText = popCount.toString()
  }
  
  balloonElement.style.height = height + "px"
  balloonElement.style.width = width + "px"
  
  let clickCountElem = document.getElementById("click-count")
  clickCountElem.innerText = clickCount.toString()
}