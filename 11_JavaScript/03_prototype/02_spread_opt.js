let student = {
    name: "chaitanya",
    age: 20,
    height: "6 feet",
    weight: "65 kg",

    hobbies: ["travel", "technology", "drawing"],
    // array inside obj


    academicRecord : {
        ssc: "92%",
        hsc: "79%",
        fyBtech: "7.3"

    }
}

let user= student
console.log(user.height)

student.height= "5.11"
console.log(student.height)     //5.11
console.log(user.height)        //5.11

// why user also got changed; pass by ref , soln-> swallow copy 


// spread operator ...konsa_copy_karna_hai
let copystudent = {
    ...student
}

student.weight= "63 kg"
console.log(student.weight)     //63
console.log(copystudent.weight)    //65

// ... spread opt, ek independent address create karta hai, for obj copystudent


// overwrite values & add extra
let overwritestudent = {
    ...student, name: "Chetan", lastName: "Sonawane" 
}
console.log(overwritestudent)


// merge 
let mergeobj= {
    ...copystudent, ...overwritestudent
}
// overwrietstudent ke property overwrite hoghe if any same keys
