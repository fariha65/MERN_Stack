
//synchronous
/*const fs = require("fs")
const filename="target.txt"
const data = fs.readFileSync()
console.log("now watching target.txt for file changes. ")*/

//non synchronous
const fs = require("fs")
const filename="target.txt"
const data = fs.readFileSync(filename)
console.log(data.toString())
console.log("now watching target.txt for file changes.")