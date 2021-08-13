// for (let i = 1; i <= 10; i++) {
//   console.log(i)
// }
//////////////////////////////////////////////
// for (let i = 25; i >= 0; i -= 5) {
//   console.log(i)
// }
//////////////////////////////////////////////
// const animals = ["lions", "tigers", "bears"]

// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i])
// }
//0 lions
//1 tigers
//2 bears
//////////////////////////////////////////////
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"] //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for (i = 0; i < people.length; i++) {
//   console.log(people[i].toUpperCase())
// }
// //////////////////////////////////////////////
// for (let i = 1; i <= 5; i++) {
//   console.log(`i is ${i}`)
//   for (j = 1; j < 4; j++) {
//     console.log(`   j is ${j}`)
//   }
// }
//////////////////////////////////////////////
// const seatchart = [
//   ["kris", "erik", "namita"],
//   ["georg", "juanita", "antonio", "kevin"],
//   ["yuma", "sakura", "jack", "erika"],
// ]
// for (i = 0; i < seatchart.length; i++) {
//   const row = seatchart[i]
//   console.log(`row #${i + 1}`)
//   for (j = 0; j < row.length; j++) {
//     console.log(row[j])
//   }
// }
//////////////////////////////////////////////
let count = 0
while (count <= 10) {
  console.log(count)
  count++
}
//////////////////////////////////////////////
let targetNum = Math.floor(Math.random() * 10)
let guess = Math.floor(Math.random() * 10)

while (true) {
  guess = Math.floor(Math.random() * 10)
  if (guess === targetNum) {
    console.log(`Correct! Guessed: ${guess} & target was ${targetNum}`)
    break
  } else {
    console.log(` Incorrect ${guess} `)
  }
}
