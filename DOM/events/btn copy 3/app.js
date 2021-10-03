// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector("form")
const tweetContainer = document.querySelecor("#list")

form.addEventListener("submit", function (e) {
  e.preventDefault()

  const productInput = form.elements.product.value
  const qtyInput = form.elements.qty.value

  const newListPart = document.querySelector("li")
  newListPart.after(qtyInput)
  newListPart.after(productInput)
  tweetContainer.after(newListPart)
})
