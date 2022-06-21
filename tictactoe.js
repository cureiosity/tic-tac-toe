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
  square.addEventListener("click", checkForWinner)
})

function toggleHighlight(e) {
  e.target.classList.toggle("active")
}

let clickCount = 0
let whoseTurn = document.querySelector("#turn-color")

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

const square1 = document.querySelector("#box1")
const square2 = document.querySelector("#box2")
const square3 = document.querySelector("#box3")
const square4 = document.querySelector("#box4")
const square5 = document.querySelector("#box5")
const square6 = document.querySelector("#box6")
const square7 = document.querySelector("#box7")
const square8 = document.querySelector("#box8")
const square9 = document.querySelector("#box9")
function checkForWinner() {
  if (
    ([...square1.classList].includes("player-red") &&
      [...square2.classList].includes("player-red") &&
      [...square3.classList].includes("player-red")) ||
    ([...square1.classList].includes("player-blue") &&
      [...square2.classList].includes("player-blue") &&
      [...square3.classList].includes("player-blue")) ||
    ([...square4.classList].includes("player-red") &&
      [...square5.classList].includes("player-red") &&
      [...square6.classList].includes("player-red")) ||
    ([...square4.classList].includes("player-blue") &&
      [...square5.classList].includes("player-blue") &&
      [...square6.classList].includes("player-blue")) ||
    ([...square7.classList].includes("player-red") &&
      [...square8.classList].includes("player-red") &&
      [...square9.classList].includes("player-red")) ||
    ([...square7.classList].includes("player-blue") &&
      [...square8.classList].includes("player-blue") &&
      [...square9.classList].includes("player-blue")) ||
    ([...square1.classList].includes("player-red") &&
      [...square4.classList].includes("player-red") &&
      [...square7.classList].includes("player-red")) ||
    ([...square1.classList].includes("player-blue") &&
      [...square4.classList].includes("player-blue") &&
      [...square7.classList].includes("player-blue")) ||
    ([...square2.classList].includes("player-red") &&
      [...square5.classList].includes("player-red") &&
      [...square8.classList].includes("player-red")) ||
    ([...square2.classList].includes("player-blue") &&
      [...square5.classList].includes("player-blue") &&
      [...square8.classList].includes("player-blue")) ||
    ([...square3.classList].includes("player-red") &&
      [...square6.classList].includes("player-red") &&
      [...square9.classList].includes("player-red")) ||
    ([...square3.classList].includes("player-blue") &&
      [...square6.classList].includes("player-blue") &&
      [...square9.classList].includes("player-blue")) ||
    ([...square1.classList].includes("player-red") &&
      [...square5.classList].includes("player-red") &&
      [...square9.classList].includes("player-red")) ||
    ([...square1.classList].includes("player-blue") &&
      [...square5.classList].includes("player-blue") &&
      [...square9.classList].includes("player-blue")) ||
    ([...square3.classList].includes("player-red") &&
      [...square5.classList].includes("player-red") &&
      [...square7.classList].includes("player-red")) ||
    ([...square3.classList].includes("player-blue") &&
      [...square5.classList].includes("player-blue") &&
      [...square7.classList].includes("player-blue"))
  ) {
    console.log("we have a winner!")
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
