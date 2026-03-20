const eventemitter = require("events")

var ee = new eventemitter()

ee.on('circle', (r) => {
    console.log(`Area of circle is ${3.14 * r * r}`)
})

ee.on('square', (s) => {
    console.log(`Area of square is ${s * s}`)
})


ee.emit('circle', 10)
ee.emit('square', 20)