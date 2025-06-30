/* 
obj declaration: 
- literals (non singleton)
- constructor (singleton)




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


// add elmt in object
const tinderUser= {

}
console.log(tinderUser);

tinderUser.id= "384"
tinderUser.name= "username"
tinderUser.age= 20

console.log(tinderUser);


// combine obj
const profile= {
    user: "chetan",
    logo: "https://logo.png",
    age: 21,
}

const profile2= {
    user1: "bhavesh",
    logo1: "https://logo2.png",
    age1: 21,
    username: "bhavesh87323"
}

const combineProfile= {profile, profile2}
console.log(combineProfile);

const combineProfile2= Object.assign({},profile, profile2)  //{}target
console.log(combineProfile2);

const combineProfile3= {...profile, ...profile2}        //... spread operator
console.log(combineProfile3);


// extraction of keys and values
console.log(Object.keys(profile));
console.log(Object.keys(combineProfile3));

console.log(Object.values(combineProfile3));
console.log(Object.values(profile));


// ----------------  objects de-structure & API ----------

const course= {
    name: "javascript basics",
    duration: "1 month",
    instructor: "hitesh sir",
    price: "999"
}

console.log(course.duration);

// de-structure --> syntactical sugar
const {duration, instructor: teacher}= course

console.log(duration);
console.log(teacher);       //custom name


// API  - values in JSON 

// json- obj
/* 
{
    name: "chaitanya",
    coursename: "java script",
    price: "free"
}  
*/   

    
