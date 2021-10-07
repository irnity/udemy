const p1 = {
  score: 0,
  button: document.querySelector("#P1Plus"),
  display: document.querySelector("#P1Score"),
}
const p2 = {
  score: 0,
  button: document.querySelector("#P2Plus"),
  display: document.querySelector("#P2Score"),
}

const reset = document.querySelector("#reset")
const winningScoreSelect = document.querySelector("#playto")

let winningScore = 3
let gameOver = false

function updateScores(player, opponent) {
  if (!gameOver) {
    player.score += 1
    if (player.score === winningScore) {
      gameOver = true
      player.display.classList.add("winner")
      opponent.display.classList.add("loser")
      player.button.disabled = true
      opponent.button.disabled = true
    }
    player.display.innerHTML = player.score
  }
}

p1.button.addEventListener("click", function () {
  updateScores(p1, p2)
})

p2.button.addEventListener("click", function () {
  updateScores(p2, p1)
})

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value)
  resets()
})

reset.addEventListener("click", resets)

function resets() {
  p1.score = 0
  p2.score = 0
  gameOver = false
  P1Plus.disabled = false
  P2Plus.disabled = false
  p1.display.classList.remove("winner", "loser")
  p2.display.classList.remove("loser", "winner")
  p1.display.textContent = "0"
  p2.display.textContent = "0"
}
