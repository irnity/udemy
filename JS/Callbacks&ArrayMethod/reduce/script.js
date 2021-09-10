let prices = [3, 5, 6, 8, 11]

prices.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

let i = prices.reduce((min, price) => {
  if (price < min) {
    return price
  } else {
    return min
  }
})

const movie = [
  {
    title: "last one",
    score: 50,
  },
  {
    title: "legend",
    score: 90,
  },
  {
    title: "what",
    score: 20,
  },
]
const titles = movie.map(function (movies) {
  return movies.title
})

let j = movie.reduce((bestMovies, currMovie) => {
  if (currMovie.score > bestMovies.score) {
    return currMovie
  }
  return bestMovies
})
