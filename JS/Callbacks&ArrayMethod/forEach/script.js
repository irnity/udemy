let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function print(element) {
  console.log(element)
}
num.forEach(print)

num.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el)
  }
})
