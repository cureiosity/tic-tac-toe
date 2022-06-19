const main = document.querySelector("main")
for (i = 0; i < 9; i++) {
  const tttDiv = document.createElement("div")
  tttDiv.classList.add("ttt-square")
  tttDiv.id = `box${i + 1}`
  main.appendChild(tttDiv)
}
