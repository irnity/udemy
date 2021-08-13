let userCommand = prompt("Enter your command")
const userArray = ["Collect Chichen eggs", "Clean litter box"]

while (userCommand !== "quit" && userCommand !== "q") {
  if (userCommand === "list") {
    console.log("**********")
    for (i = 0; i < userArray.length; i++) {
      console.log(`${i} : ${userArray[i]}`)
    }
    console.log("**********")
  } else if (userCommand === "new") {
    userArray.push(prompt("Enter ToDo "))
  } else if (userCommand === "delete") {
    const index = parseInt(prompt("ok , enter an index to delete"))
    if (!Number.isNaN(index)) {
      userArray.slice(index, 1)
      consle.log(`Ok deleted ${delete [0]}`)
    } else {
      consle.log("NAN")
    }
  }
  userCommand = prompt("Enter your command")
}
console.log("you quit")
