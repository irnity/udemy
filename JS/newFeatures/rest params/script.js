// function sum() {
//   return arguments.reduce((total, el) => total + el)
// }
// sum(3, 4, 5, 6, 7, 1, 2, 3, 4)
function sum(...nums) {
  return nums.reduce((total, el) => total + el)
}
function raceResults(gold, silver, ...everyOneElse) {
  console.log(`Gold medal oges to ${gold}`)
  console.log(`Silver medal oges to ${silver}`)
  console.log(`End thanks to everyone else ${everyOneElse}`)
}
