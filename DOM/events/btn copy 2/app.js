const form = document.querySelector("#dogs")
const tweetContainer = document.querySelector("#tweets")
form.addEventListener("submit", function (e) {
  e.preventDefault()
  // const userInput = document.querySelectorAll("input")[0]
  // const tweetInput = document.querySelectorAll("input")[1]
  // console.log(userInput.value, tweetInput.value)
  const userInput = form.elements.username.value
  const tweetInput = form.elements.tweet.value

  const newtweet = document.createElement("li")
  const bteg = document.createElement("b")
  bteg.append(userInput)
  newtweet.append(bteg)
  newtweet.append(`- ${tweetInput}`)
  tweetContainer.append(newtweet)
})
