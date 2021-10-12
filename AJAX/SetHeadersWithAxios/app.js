axios
  .get("https://api.cryptonator.com/api/full/btc-usd")
  .then((res) => {
    console.log(res.data.ticker.price)
  })
  .catch((e) => {
    console.log("error", e)
  })

const priceBit = async () => {
  try {
    const res = await axios.get("https://api.cryptonator.com/api/full/btc-usd")
    console.log(res.data.ticker.price)
  } catch (e) {
    console.log("error", e)
  }
}
