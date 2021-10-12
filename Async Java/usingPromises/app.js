const fakeRequsetPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500
    setTimeout(() => {
      if (delay > 4000) {
        reject("connection timeout :")
      } else {
        resolve(`here is your fake data from ${url}`)
      }
    }, delay)
  })
}

// fakeRequsetPromise("yelp.com/api/coffee/page1")
//   .then(() => {
//     console.log("it worked (page1)")
//     fakeRequsetPromise("yelp.com/api/coffee/page2")
//       .then(() => {
//         console.log("it worked (page2)")
//         fakeRequsetPromise("yelp.com/api/coffee/page3")
//           .then(() => {
//             console.log("it worked (page3)")
//           })
//           .catch(() => {
//             console.log("oh no error (page3)")
//           })
//       })
//       .catch(() => {
//         console.log("oh no error (page2)")
//       })
//   })
//   .catch(() => {
//     console.log("oh no error (page1)")
//   })

fakeRequsetPromise("yelp.com/api/coffee/page1")
  .then((data) => {
    console.log("it worked (page1)")
    console.log(data)
    return fakeRequsetPromise("yelp.com/api/coffee/page2")
  })
  .then((data) => {
    console.log("it worked (page2)")
    console.log(data)
    return fakeRequsetPromise("yelp.com/api/coffee/page3")
  })
  .then((data) => {
    console.log("it worked (page3)")
    console.log(data)
  })
  .catch((err) => {
    console.log("error")
    console.log(err)
  })
