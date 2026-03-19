const p = require("path")
var addr = "D:/LJ/node/my.html"
var dir = p.dirname(addr)
var base = p.basename(addr)
var ext = p.extname(addr)
console.log(dir)
console.log(base)
console.log(ext)

var parsed = p.parse(addr)
console.log(parsed)