/* 
string is object

index and value are obj key value
0: h
1: e
2: l
3: l
4: o

*/

const fname= "chaitanya"
const age= 20


// fname= "chetan" --> err: TypeError: Assignment to constant variable.

console.log(fname);
console.log(fname + age);
console.log(`name is ${fname} and ag is ${age}`);


// methods
console.log(fname.__proto__);       //{} contains obj of string methods

// length
console.log(fname.length);
console.log(fname.toUpperCase());       //touppercase() is fn

// uppercase
const capName= fname.toUpperCase()
console.log(`capname is ${capName}`);

// index value
console.log(fname.charAt(2));
console.log(fname.charAt(3));
console.log(fname.charAt(12));      //return space

// indexof
console.log(fname.indexOf("c"));

// substring (- values are not allowed) --> slice
console.log(fname.substring(0,4));

// slice
console.log(fname.slice(-8,4));
console.log(fname.slice(-7,4));
console.log(fname.slice(4));
/*
chaitanya
012345678
*/

// trim
const newstring= "    this is string     "
console.log(newstring);
console.log(newstring.trim());

// replace
const url= "https://chaitanya.com/chaitanya%20profile"
console.log(url.replace('%20', '-'));

// includes
console.log(url.includes('ai'));
console.log(url.includes('zz'));

// split
console.log(url.split('/'));


