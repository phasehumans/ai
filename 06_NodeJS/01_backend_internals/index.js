const fs = require('fs');       //require is fn 
const math = require('./math')

fs.writeFile('./sample.txt', 'hello everyone', ()=>{})


console.log({__filename, __dirname})        //return file path
// __filename or __dirname abhi nahi hai but runtime ke waqt var honghe



console.log(math.add(2,5))


function __require(id){
    // gar id . se shuru hu toh user ki dir mei code 
    // khud ke internal module mei dhundo
    // nahi toh node module meh search karo
}


// multiple named exports 
// only one default export

