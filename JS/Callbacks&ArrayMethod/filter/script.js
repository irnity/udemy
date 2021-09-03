const num = [1, 2, 3, 4, 5, 6]

num.filter((n) => {
  return n < 10
})

const movie = [
  {
    title: "last one",
    score: 50,
    year: 2012,
  },
  {
    title: "legend",
    score: 90,
    year: 1999,
  },
  {
    title: "what",
    score: 20,
    year: 1989,
  },
]
const titles = movie.map(function (movies) {
  return movies.title
})

const goodmovies = movie.filter((movies) => {
  return movies.score > 80
})
const badmovies = movie.filter((movies) => {
  return movies.score < 80
})
const recentmovies = movie.filter((movies) => {
  return movies.year > 2000
})
