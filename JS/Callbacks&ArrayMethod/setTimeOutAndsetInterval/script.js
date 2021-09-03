setTimeout(() => {
  console.log("hello")
}, 3000)

console.log("wow")

const id = setInterval(() => {
  console.log(Math.floor(Math.random() * 5) + 1)
}, 2000)
clearInterval(id)
