"use strict"; //treat all js code as newer version 

// alert("hello world")  //pop up in doc browser not in node

// ecma: doc for js, standard doc for language specifications and details

// Datatypes: number, string, boolean, object, undefined, symbol, null

/*
primitive: (call by value: copy of data, changes are in copy)
types --> number, string, boolean, null, undefined, symbol(value ko unique), bigInt(scientific values)

non primitive/ ref (call by reference: direct ref)
type --> array, objects, functions

js is dynamically type, typescript is static

*/

// string - "", '', ``
let namee = "Rohit";
console.log(namee.toLocaleUpperCase())
console.log(namee.length)     //returns length

// strqt.method() --> slice, uppercase, lowercase etc

// Number - 25, 25.9
let age = 20

// Boolean - true, false
let isPaid = true;

// undefined and null
let favoriteClass = null; //value is null (not empty/ 0)
let hometown;   // undefined : badh meh dekhe ge

// typeof null - object

console.log(favoriteClass);   //null
console.log(hometown);        //undefined


// array
let skills = ["html", "CSS", "Javascript"];
let arr= [1,2,3,4,5]


// conversioin of datatypes
let num1= '42'
let num2= Number(num1)

console.log(typeof(num1))     // string
console.log(typeof(num2))     // number

let age1 = 20.5
console.log("age", age1, typeof age1);

let ageString = Number(age1)
console.log("ageString: ", ageString, typeof ageString);
// can't covert num into string

let lname= "sonawane"

let numConvert= Number(lname)
console.log(numConvert);    //coverted into num but value is Nan
console.log(typeof numConvert);

 /* type conversion is done but value is showed as NaN */

//  boolean is converted into 0 and !


// object: collection of key-value pairs
let studentProfile = {
  name: "Chaitanya",
  age: 21,
  isPaid: true,
  skills: ["HTML", "Css", "JS"],
  favoriteClass: null,
};


// symbol
const id = Symbol('123')
const anotherid = Symbol('123')
// value is wrap into symbol is value is diff


// BigInt
const bignum= 87476597485689568n


console.log(`values from profile: My name is ${studentProfile.name} and my age is ${age} `)
console.log(studentProfile.name)
console.log(studentProfile.favoriteClass)
console.log(studentProfile.skills)


// typeof (datatype)
console.log(typeof isPaid);     // boolean
console.log(typeof skills);     //object
console.log(typeof studentProfile);
console.log(typeof favoriteClass);
console.log(typeof hometown);     // undefined


console.table([typeof isPaid, typeof skills, typeof studentProfile, typeof favoriteClass, typeof hometown])