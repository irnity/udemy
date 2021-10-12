fakeRequsetCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout lost")
    } else {
      success(`here is your fake data from ${url}`)
    }
  }, delay)
}

fakeRequsetCallback(
  "books.com/page1",
  function (response) {
    console.log("!it worked! 1f")
    console.log(response)
    fakeRequsetCallback(
      "books.com/page2",
      function (responce) {
        console.log("!it worked again! 2sc")
        console.log(response)
        fakeRequsetCallback(
          "books.com/page3",
          function (responce) {
            console.log("!it worked again! 3rd")
            console.log(response)
          },
          function (err) {
            console.log("!error again!", err)
          }
        )
      },
      function (err) {
        console.log("!error again!", err)
      }
    )
  },
  function (err) {
    console.log("!error!", err)
  }
)
