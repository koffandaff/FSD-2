const eventemitter = require("events")

var ee = new eventemitter()

ee.on("greet", () => {
    console.log("Hello")
}) // event

const adder = (a, b) => {
    console.log(`Addition is ${a + b}`)
}
ee.on('Second', adder) // defining functions
ee.on('Second', () => {
    console.log('NAN')
})
ee.on('xyz', (a, b) => {
    console.log(a + b)
})

ee.emit('greet') // trigger
ee.emit('Second', 3, 6) // functions args
ee.emit('Second') // functions args
ee.emit('xyz', 3, 6) // functions args


