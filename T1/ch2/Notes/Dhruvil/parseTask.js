const p = require("path")
const fs = require("fs/promises")
var mypath = "Lj/first.txt";

async function makedir(dir) {
    await fs.mkdir(dir, (e) => {
        if (e) {
            throw e
        }
        else {
            console.log('Created')
        }
    })

}

// extract dir name
newdir = p.dirname(mypath)
console.log(newdir)

makedir(newdir)
basefile = p.basename(mypath)
console.log(basefile)
makefile(newdir, basefile)

async function makefile(dir, file) {
    await fs.writeFile(dir + '/' + file, "Hello", (e) => {
        if (e) {
            throw e
        }
        else {
            console.log('Worked')
        }
    })
    await fs.copyFile(dir + '/' + file, dir + '/second.txt', (e) => {
        if (e) {
            throw e
        }
        else {
            console.log('Copied')
        }
    })

}

