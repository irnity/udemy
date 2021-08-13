let maximum = parseInt(prompt("enter your maximum number!"))
while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number"))
}

const targetNum = Math.floor(Math.random() * maximum) + 1

let guess = parseInt(prompt("Enter your first guess"))
let attempts = 1

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break
  attempts++
  if (guess > targetNum) {
    guess = prompt("too high! enter a new guess")
  } else {
    guess = prompt("too low! enter a new guess")
  }
}

if (guess === "q") {
  console.log("ok you quit")
} else {
  console.log(`you got it you took ${attempts} guesses `)
}
