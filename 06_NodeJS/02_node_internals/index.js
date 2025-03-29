const fs= require('fs');

setTimeout(()=> console.log("set timeout "), 0)

setImmediate(()=> console.log('set immediate'))

// console.log('hello')     --> seq: hello, set timeoout, set immediate


