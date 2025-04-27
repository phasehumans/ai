// Datatypes: number, string, boolean, object, undefined, symbol, null

// string - "", '', ``
let namee = "Rohit";
console.log(namee.toLocaleUpperCase())
console.log(namee.length)     //returns length

// strqt.method() --> slice, uppercase, lowercase etc

// Number - 25, 25.9
let age = 25;

// Boolean - true, false
let isPaid = true;

// undefined and null
let favoriteClass = null;
let hometown;   // undefined : badh meh dekhe ge

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


// object: collection of key-value pairs
let studentProfile = {
  name: "Chaitanya",
  age: 21,
  isPaid: true,
  skills: ["HTML", "Css", "JS"],
  favoriteClass: null,
};


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
