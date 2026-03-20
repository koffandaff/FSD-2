const eventemitter = require("events")
const fs = require('fs')
var ee = new eventemitter()

ee.on('createFolder', () => {
    if (!fs.existsSync('abc')) {
        fs.mkdirSync('abc')
    } else {
        console.log('File Already Exists')
    }
    ee.emit('writeFile')
})

ee.on('witeFile', () => {
    fs.writeFileSync('abc/xyz.txt', 'Hello Everyone!')
})

ee.on('AppendFile', () => {
    fs.appendFileSync('abc/xyz.txt', 'How Are you?')
    ee.emit('ReadFile')
})

ee.on('ReadFile', () => {
    const data = fs.readFileSync('abc/xyz.txt', 'utf-8')
    console.log(data)
})
ee.emit('createFolder')
ee.emit('AppendFile')