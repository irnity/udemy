const fakeRequset = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random()
    setTimeout(() => {
      if (rand < 0.7) {
        resolve("your fake data")
      } else reject("request error")
    }, 1000)
  })
}

fakeRequset("/dogs/1")
  .then((data) => {
    console.log("done with request")
    console.log("data us :", data)
  })
  .catch((err) => {
    console.log("ohh no", err)
  })
