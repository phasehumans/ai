// this sets / ref current context

const user = {
    username: "chaitanya",
    age: 21,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to chaicode`);
        
    }
}

console.log(user);

// console.log(user.welcomeMessage());
user.welcomeMessage()

// key value of obj not var
user.username= "bhavesh"



// -------------------      this    ----------------------

user.welcomeMessage()
console.log(this);      // {} this is empty obj

/* 
this is empty obj in global scope, and window undefined in browser.
node, deno, bun is engine (standalone engine)
*/

function thisContext(){
    console.log(this)
}
thisContext()
/* 
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}
*/



// ---------------      arrow fn    -----------------

const clr = () =>{
    let username= "chaitanya"
    console.log(this.username)
}
clr()   //undefined


const clr2 = () =>{
    let username= "chaitanya"
    console.log(this)
}
clr2()   //{}

/* 
- this in JavaScript: Refers to the object that is 
executing the current function.

- Arrow functions: Do not have their own this — 
they inherit it from the surrounding (lexical) scope.
*/

// explicit return
const sumTwo = (num1, num2) =>{
    return num1 + num2
}
console.log(sumTwo(2,3));

// emplicit return
const sumTwo2 = (num1, num2) => (num1 + num2) 
console.log(sumTwo2(5,9));

// {} then use return; () no return

