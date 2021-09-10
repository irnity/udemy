const exams = [88, 56, 78, 97, 58, 95, 85]

exams.every((score) => score >= 75)

true

exams.some((score) => score <= 75)

falce

function allEvens(numbers) {
  return numbers.every(function (numbers) {
    return numbers % 2 === 0
  })
}
