// string - "", '', ``
let name = "Rohit";

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


// object: collection of key-value pairs
let studentProfile = {
  name: "Chiatanya",
  age: 21,
  isPaid: true,
  skills: ["HTML", "Css", "JS"],
  favoriteClass: null,
};


console.log(`values from profile: My name is ${studentProfile.name} and my age is ${age} `)
console.log(studentProfile.name)
console.log(studentProfile.favoriteClass)
console.log(studentProfile.skills)



console.log(typeof isPaid);     // boolean
console.log(typeof skills);     //object
console.log(typeof studentProfile);
console.log(typeof favoriteClass);
console.log(typeof hometown);     // undefined
