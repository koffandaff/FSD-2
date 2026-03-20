const url = require('url')
const link = 'https://video.google.com:8080/about?id=20&year=2027&name=Dhruvil'

const parsedUrl = url.parse(link, true)
console.log(parsedUrl)

console.log(parsedUrl.query)

// check leap year
console.log(parsedUrl.query.year, parsedUrl.query.year % 4 == 0 ? 'Leap Year' : 'Not a Leap Year')