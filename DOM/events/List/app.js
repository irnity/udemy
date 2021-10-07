const form = document.querySelector("#dogs")
const tweetContainer = document.querySelector("#tweets")
form.addEventListener("submit", function (e) {
  e.preventDefault()
  // const userInput = document.querySelectorAll("input")[0]
  // const tweetInput = document.querySelectorAll("input")[1]
  // console.log(userInput.value, tweetInput.value)
  const userInput = form.elements.username
  const tweetInput = form.elements.tweet
  addTweet(userInput.value, tweetInput.value)
  userInput.value = ""
  tweetInput.value = ""
})

const addTweet = (userInput, tweetInput) => {
  const newtweet = document.createElement("li")
  const bteg = document.createElement("b")
  bteg.append(userInput)
  newtweet.append(bteg)
  newtweet.append(`- ${tweetInput}`)
  tweetContainer.append(newtweet)
}

tweetContainer.addEventListener("click", function (e) {
  e.target.nodeName === "LI" && e.target.remove()
})
