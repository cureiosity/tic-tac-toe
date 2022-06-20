const tttContainer = document.querySelector("#ttt-container")
for (i = 0; i < 9; i++) {
  const tttDiv = document.createElement("div")
  tttDiv.classList.add("ttt-square")
  tttDiv.classList.add("unclicked")
  tttDiv.id = `box${i + 1}`
  tttContainer.appendChild(tttDiv)
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
let whoseTurn = document.querySelector("#turn-color")
console.log(whoseTurn.innerText)

function markSquare(e) {
  if (e.target.classList.contains("unclicked")) {
    clickCount++
    e.target.classList.remove("unclicked")
    if (clickCount % 2 !== 0) {
      e.target.classList.add("player-red")
      whoseTurn.innerText = "Blue's"
      whoseTurn.style.color = "blue"
    } else {
      e.target.classList.add("player-blue")
      whoseTurn.innerText = "Red's"
      whoseTurn.style.color = "red"
    }
  }
}

const resetButton = document.querySelector("#reset")
resetButton.addEventListener("click", resetBoard)
function resetBoard() {
  clickCount = 0
  tttSquares.forEach((square) => {
    square.classList.remove("player-red")
    square.classList.remove("player-blue")
    square.classList.add("unclicked")
  })
  whoseTurn.innerText = "Red's"
  whoseTurn.style.color = "red"
}
