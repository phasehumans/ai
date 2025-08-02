// classes: templates (blueprint) for obj

class person {
    constructor (fname, lname){
        this.fname= fname;
        this.lname= lname;

    }

    getFullname(){
        return `${this.fname} ${this.lname}`
    }
}


const p1= new person("chaitanya", "sonawane")
const p2= new person("bhavesh", "sonawane")


console.log(p1.getFullname())
console.log(p2.getFullname())
