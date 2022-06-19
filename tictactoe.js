const main = document.querySelector("main")
for (i = 0; i < 9; i++) {
  const tttDiv = document.createElement("div")
  tttDiv.classList.add("ttt-square")
  tttDiv.id = `box${i + 1}`
  main.appendChild(tttDiv)
}

const tttSquares = document.querySelectorAll(".ttt-square")
tttSquares.forEach((square) => {
  square.addEventListener("mouseover", toggleHighlight)
  square.addEventListener("mouseout", toggleHighlight)
  square.addEventListener("click", markSquare)
})

function toggleHighlight(e) {
  e.target.classList.toggle("active")
}

let clickCount = 0
function markSquare(e) {
  clickCount++
  let filler = null
  if (clickCount % 2 === 0) {
    filler = "O"
  } else {
    filler = "X"
  }
  const playerMark = document.createElement("h1")
  playerMark.innerText = filler
  e.target.appendChild(playerMark)
}
