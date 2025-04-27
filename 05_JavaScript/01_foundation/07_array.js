let fruits = ["apple", "cherry", "banana"];
let intFruits = new Array("kiwi", "avacado", "dragon fruit");   // ()

console.log(fruits);
console.log(intFruits);

// array is obj 
console.log(typeof fruits);
console.log(typeof intFruits);

console.log(fruits[0]);
console.log(fruits.length);     // .length is method

fruits[0] = "blueberry";
console.log(fruits[0]);

fruits.push("grapes");        // add at last
console.log(fruits);

fruits.unshift("mango");     // add to first
console.log(fruits);

// push, pop are methods


fruits.pop();       // remove last
console.log(fruits);
