/* 
- array is obj
- array is mutable (change content)
- A container to store multiple values in a single variable
- arrays allow us to manage them in a single structure.
- shallow copy,changes in original array (same ref)
*/

// initalize array
let fruits = ["apple", "cherry", "banana"];
let intFruits = new Array("kiwi", "avacado", "dragon fruit");   // ()

console.log(fruits);
console.log(intFruits);

// array is obj 
console.log(typeof fruits);
console.log(typeof intFruits);

//Prototypes
console.log(fruits.__proto__);      //Object(0) []

// -----------  methods ----------

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

// join: converts into string
const arr= [1,2,3,4,5]
const newarr= arr.join()

console.log(arr)
console.log(newarr)
console.log(typeof newarr)


// concat: returns new array w/o change in og

// fruits.push(intFruits)
// console.log(fruits);

fruits.concat(intFruits)
console.log(fruits);

console.log(fruits.concat(intFruits));

// spread operator
const allFruits= [...fruits, ...intFruits]
console.log(allFruits);


// flat: merge subarrays
const mixarr= [1,2,3,[4,5,6,[7,8,9]]]
console.log(mixarr);

const realarr= mixarr.flat(Infinity)        //infinity is depth of array
console.log(realarr);


// array checking
console.log(Array.isArray("chaitanya"))

console.log(Array.from("chaitanya"));
console.log(Array.from({age: "18"}));   //[] need to define from keys or values
