// factory create karo ;  function 
function gradecal(marks){
    let grade;
    if (marks>=90){
        grade= "A";
    }else if (marks>=80){
        grade= "B";
    }else if (marks>=70){
        grade="C"
    }else{
        grade= "F"
    }
    return grade;

}

// fun ko call karo
console.log(gradecal(66));


let grade1 = gradecal(90);
console.log(grade1)