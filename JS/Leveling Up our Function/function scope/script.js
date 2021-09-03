// let x = 5
// if (x > 0) {
//   var a = 5
// }
// console.log(a)
///////////////////////
// let x = 5
// if (x > 0) {
//   let a = 5
// }
// console.log(a)
///////////////////////
// let square = function (num) {
//   let x = Math.pow(num, 2)
//   return x
// }
// square(3)
///////////////////////
// function callTwice(func) {
//   func()
//   func()
// }
// function roolDice() {
//   let roll = Math.floor(Math.random() * 6) + 1
//   console.log(roll)
// }
// ///////////////////////
// function isBetween(num) {
//   return num >= 1 && num <= 10
// }
function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max
  }
}
let isChiled = makeBetweenFunc(10, 20)
