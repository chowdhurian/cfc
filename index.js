const fs = require('fs')
const parse = require('csv-parse')

const categories = {}

const createEntry = (violation) => {
  categories[violation.violation_category] = {
    'count': 1, 
    'earliest': new Date(violation.violation_date),
    'latest': new Date(violation.violation_date),
  }
}

const updateEntry = (violation) => {
  categories[violation.violation_category].count += 1
  let date = new Date(violation.violation_date)
  if (categories[violation.violation_category].earliest > date)
    categories[violation.violation_category].earliest = date

  if (categories[violation.violation_category].latest < date)
    categories[violation.violation_category].latest = date
}

const getCategoryCount = (rows) => {
  rows.map((violation) => {
    if (!categories[violation.violation_category]) {
      createEntry(violation)
    } else {
      updateEntry(violation)
    }
  })

  return categories
}

fs.readFile('./C4C-dev-challenge-2018.csv', function (err, fileData) {
  parse(fileData, {columns: true, trim: true}, function(err, rows) {
    console.log(getCategoryCount(rows))
  })
})

