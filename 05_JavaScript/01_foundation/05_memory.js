/*
 stack(primitive) -> copy is pass
 heap(non primitive) -> ref is pass
 */

// call by value (primitive datatype)
 let myname= "chaitanya"
 let anotherName= myname

 console.log(myname);       //chaitanya
 console.log(anotherName);  //chaitanya

 myname= "chetan"

 console.log(myname);       //chetan
 console.log(anotherName);  //chaitanya
 
//  myname ka copy pass in another name, not the actual value
// call by value


// call by ref (non primitive)
let userOne = {
    email: "useone@gmail.com",
    upi: "use1@ybl"
}

let useTwo = userOne; // Assigning the reference of userOne to useTwo

console.log(userOne);
console.log(useTwo);

useTwo.email= "newemail@gmail.com"
// both userOne and userTwo have same memory ref, both changes
console.log(userOne);
console.log(useTwo);



 



 
 

