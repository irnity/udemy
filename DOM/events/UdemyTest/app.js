const form = document.querySelector("form")
const product = document.querySelector("#product")
const quantity = document.querySelector("#qty")

const groceryList = document.querySelector("#list")

form.addEventListener("submit", function (e) {
  e.preventDefault()
  const newList = document.createElement("li")
  newList.innerHTML = `${quantity.value} ${product.value}`
  groceryList.appendChild(newList)
  quantity.value = ""
  product.value = ""
})
