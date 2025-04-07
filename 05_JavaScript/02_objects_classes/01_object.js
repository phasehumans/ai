// object : key-value pairs, represents real world entities
// non primitive 


let student = {
    name: "chaitanya",
    age: 20,
    height: "6 feet",
    weight: "65 kg",

    // array inside obj
    hobbies: ["travel", "technology", "drawing"],
    

    // obj ke andar obj
    academicRecord : {
        ssc: "92%",
        hsc: "79%",
        fyBtech: "7.3"

    }
    

}

console.log(student.name)       // dot notation to acess keys of obj
console.log("CGPA : ",student.academicRecord.hsc)
console.log("age", student.age)

student.hobbies.pop()
console.log(student.hobbies)

delete student.weight
console.log(student)

// property exist test
console.log("hobbies" in student)
console.log("weight" in student)


// loop through obj
for (let key in student){
    console.log(key, student[key])
}


// number of properties in obj
console.log(Object.keys(student).length)