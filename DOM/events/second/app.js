const btn = document.querySelector("#v2")
btn.onclick = function () {
  console.log("you clicked")
  alert("hello")
}

function scream() {
  console.log("aaa")
  console.log("stop it")
}
function gigle() {
  console.log("123")
  console.log("321 ")
}

//btn.onmouseenter = scream

document.querySelector("h1").onclick = function () {
  alert("hello there")
}

const btnOne = document.querySelector("#v1")

// btnOne = addEventListener("click", function () {
//   alert("addEventListener")
// })

const btnThree = document.querySelector("#v33")

btnThree.addEventListener("click", scream, { once: true })
btnThree.addEventListener("click", gigle)
