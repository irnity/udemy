const btn = document.querySelector("#v1")
const h1 = document.querySelector("h1")
btn.addEventListener("click", function () {
  document.body.style.backgroundColor = "olive"
  let r = Math.floor(Math.random() * 255)
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)
  const newColor = `rgb(${r},${g},${b})`
  document.body.style.backgroundColor = newColor
  h1.innerText = `${newColor}`
})
