// let die1 = rollDie(6)
// function singSong() {
//   console.log("do")
//   console.log("re")
//   console.log("mi")
// }
// singSong()
////////////////////////////////////////////////////
// function greet(person) {
//   console.log(`hello ${person}`)
// }
////////////////////////////////////////////////////
// function greets(person, lastname) {
//   console.log(`hello ${person} ${lastname[0]}.`)
// }
////////////////////////////////////////////////////
// function repeat(str, numTimes) {
//   let result = ""
//   for (i = 0; i < numTimes; i++) {
//     result += str
//   }
//   console.log(result)
// }
////////////////////////////////////////////////////
// // define isSnakeEyes below:
// function isSnakeEyes(numOne, numTwo) {
//   if (numOne === 1 && numTwo === 1) {
//     console.log("Snake Eyes!")
//   } else {
//     console.log("Not Snake Eyes!")
//   }
// }
////////////////////////////////////////////////////
// // DEFINE YOUR FUNCTION BELOW:
// function isShortsWeather(num) {
//   let temporatury = num
//   if (temporatury >= 75) {
//     return true
//   } else {
//     return false
//   }
// }
////////////////////////////////////////////////////
// // DEFINE YOUR FUNCTION BELOW:
// function lastElement(array) {
//   if (array.length === 0) {
//     return null
//   } else {
//     return array[array.length - 1]
//   }
// }

let a = ["dog", "cat", "bow"]
////////////////////////////////////////////////////
//inMyWay
// function capitalize(num) {
//   let fake = num
//   let cap = fake[0]
//   fake = fake.substring(1)
//   console.log(fake)
//   cap = cap.toUpperCase()
//   console.log(cap)
//   show = cap + fake
//   console.log(show, num)
// }

// howItShouldBe
// function capitalize(str){
//   let firstLetter = str.slice(0,1).toUpperCase();
//   let restStr = str.slice(1);
//   return firstLetter+restStr;
// }
////////////////////////////////////////////////////
// // DEFINE YOUR FUNCTION BELOW:
// function sumArray(nums) {
//   let x = 0
//   for (let i = 0; i < nums.length; i++) {
//     x += nums[i]
//   }
//   return nums
// }

// // DEFINE YOUR FUNCTION BELOW:
// my way
function returnDay(day) {
  switch (day) {
    case 1:
      console.log("Monday")
      break
    case 2:
      console.log("Tuesday")
      break
    case 3:
      console.log("Wednesday")
      break
    case 4:
      console.log("Thursday")
      break
    case 5:
      console.log("Friday")
      break
    case 6:
      console.log("Saturday")
      break
    case 7:
      console.log("Sunday")
      break
    default:
      return null
  }
}
// how it should
const days = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
}

const returnDay = (number) => {
  if (number < 1 || number > 7) {
    return null
  }
  return days[number]
}
