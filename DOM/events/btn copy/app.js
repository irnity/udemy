// document.querySelector("button").addEventListener("click", function (evn) {
//   console.log(evn)
// })

// const inp = document.querySelector("input")
// inp.addEventListener("keydown", function (e) {
//   console.log(e.key)
//   console.log(e.code)
// })

// inp.addEventListener("keyup", function () {
//   console.log("key up")
// })

window.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "ArrowUp":
      console.log("UP!")
    case "ArrowDown":
      console.log("DOWN!")
  }
})
