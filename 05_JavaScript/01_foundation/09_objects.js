/* 
obj declaration: 
- literals (no singleton)
- constructor




*/
// constructor method :singleton
Object.create

// obj literals
const user= {
    fname: "chaitanya", 
    "fullname": "chaitanya sonawane",
    age: 20,
    height: 5.11,
    location: {
        pincode: 425408,
        city: "indave",
        dist: "dhule"
    },
    hobbies: null,
    arr: [1,2,3,4]
}


console.log(user.location.pincode);

console.log(user["fullname"]);      //---> acces elmt
console.log(user.fullname);

// freeze obj
// Object.freeze(user)

user.height= 6.0        //not chnaged
user.location.city= "dondaicha"     //changed --> shallow

console.log(user)


// function in obj
user.greet= function(){
    console.log("hello user")
}

console.log(user.greet)     //undefined
console.log(user.greet());  //hello user


user.greetTwo= function(){
    console.log(`hello ${this.fname}`)
}
console.log(user.greetTwo());

