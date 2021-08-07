//Object

// const fitBitData = {
//   totalSteps: 308727,
//   totalMiles: 211.7,
//   avgCalorieBurn: 5755,
//   workoutsThisWeek: "5 of 7",
//   avgGoodSleep: "2:13",
//   Streets: ["first", "second"],
// }

// //get access
// fitBitData["totalMiles"]
// 308727
// fitBitData.totalMiles
// 308727

//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
  name: "Ichiran Ramen",
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: "Brooklyn",
  state: "NY",
  zipcode: "11206",
}

//YOUR CODE GOES DOWN HERE:
let fullAddress =
  restaurant.address +
  " " +
  restaurant.city +
  " " +
  restaurant.state +
  " " +
  restaurant.zipcode
