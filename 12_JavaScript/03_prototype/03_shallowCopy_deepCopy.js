// shallow copy
let user1 = {
    name: "Amit",
    skills: ["JS", "Python"],
    address: {
        city: "Dhule"
      }
  };
  
  let user2 = user1;  //Shallow copy (just reference)
  
user2.name = "Sumit";
  
console.log(user1.name);
console.log(user2.name);


// deep copy
let user3={
    ...user1
}

user3.name= "Bhavesh"
console.log(user1.name)
console.log(user3.name)


// nested change 
user3.address.city= "Shirpur"
console.log(user1.address.city)
console.log(user3.address.city)
// for nested obj, spread is shallow again




// full deep copy
user3 = JSON.parse(JSON.stringify(user1));          //serialization (obj -> str) - deserialization
user3.address.city= "Dondaicha"
console.log(user1.address.city)
console.log(user3.address.city)

  