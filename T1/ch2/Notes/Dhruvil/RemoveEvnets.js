// Removing Listners

const eventemitter = require("events")
var ee = new eventemitter()

const greet = () => {
    console.log("Hello")
}

const adder = (a, b) => {
    console.log(`Addition is ${a + b}`)
}

ee.on('greet', greet)
ee.on('Second', adder)

ee.emit('greet')
ee.emit('Second', 3, 6)

ee.removeListener('Second', adder) // need to add the function or it won't remove

ee.emit('greet')
ee.emit('Second', 3, 6)

ee.removeAllListeners('greet') // all the associated listeners
ee.emit('greet')
ee.emit('Second', 3, 6)

c1 = ee.listenerCount('Second')
console.log(c1)