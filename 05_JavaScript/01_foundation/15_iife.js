/* 
IIFE: immediately invoked functions expressions
- to avoid global scope pollution for specific fn, 
*/

// iife fn
(function dbconnect(){
    console.log("db connected")
})();      // ; is imp to end

// ; error --> TypeError: (intermediate value)(...) is not a function

(() => {
    console.log("database connected")
})(); // ; is important **


((message) => {
    console.log(`database connected ${message}`)
})("succesfully")


