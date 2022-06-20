const main = document.querySelector("main")
for (i = 0; i < 9; i++) {
  const tttDiv = document.createElement("div")
  tttDiv.classList.add("ttt-square")
  tttDiv.classList.add("unclicked")
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
  if (e.target.classList.contains("unclicked")) {
    clickCount++
    console.log(clickCount)
    e.target.classList.remove("unclicked")
    if (clickCount % 2 !== 0) {
      e.target.classList.add("player-red")
    } else {
      e.target.classList.add("player-blue")
    }
  }
}

const resetButton = document.querySelector("#reset")
console.log(resetButton.innerText)
resetButton.addEventListener("click", resetBoard)
function resetBoard() {
  clickCount = 0
  console.log(clickCount)
  tttSquares.forEach((square) => {
    square.classList.remove("player-red")
    square.classList.remove("player-blue")
    square.classList.add("unclicked")
  })
}
