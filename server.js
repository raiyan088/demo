console.log('Hello, Demo!')

var os = require('os')

console.log(os.cpus())
console.log(os.totalmem())
console.log(os.freemem())

console.log(os.cpus().length)