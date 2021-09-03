const num = [1, 2, 3, 4, 5, 6]

const doubles = num.map(function (hero) {
  return hero * 2
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
