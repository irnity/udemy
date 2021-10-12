// async function hello() {}

// const sing = async () => {
//   throw "oh no problem"
//   return "lalal"
// }

// sing()
//   .then((data) => {
//     console.log("prom resolved with:", data)
//   })
//   .catch((err) => {
//     console.log("oj no promise rejected")
//     console.log(err)
//   })

const login = async (username, password) => {
  if (!username || !password) throw "missing credentials"
  if (password === "corgifeetarecute") return "welcome"
  throw "invalid password"
}
login("dasd", "corgifeetarecute")
  .then((msg) => {
    console.log("LOGGED IN")
    console.log(msg)
  })
  .catch((err) => {
    console.log("error")
    console.log(error)
  })
