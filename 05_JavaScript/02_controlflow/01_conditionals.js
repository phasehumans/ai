// use to determine the flow of program

// if / else / elseif
age = 23;

if(age>18){
    console.log(`you are eligible to vote`)
}
if (age> 22) {          //else if; terminate at if condn, if hai to check kar raha hai
    console.log("you are eligble for candidate")
}
else{
    console.log("you are not eligible to vote")
}


if (1){      //truthy
    console.log("this statment will always execute")
}
if (0){     //falsy
    console.log("this statment will never execute")
}

// nullish coalescing ooperator (??): null undefined (fallback)
// do safety check if null or undeinfed then null ?? 18 ; consider 18
let val1
val1= 5 ?? 10
console.log(val1)   //5

let val2
val2= null ?? 10
console.log(val2)   //10

let val3
val3= undefined ?? 15
console.log(val3);


// ternary operator
const teaPrice= 78
teaPrice >= 80 ? console.log("less than 80"): console.log("more than 80");


// switch 
a= 10;
b= 15;
op= "*"
switch(op){

    case "+": {
        console.log(a+b)        //break nahi add kara toh saree run hote hai
        break;
    }
    case "-":{
        console.log(a-b)
        break;
    }
    case "*":{
        console.log(a*b)
        break;
    }
    case "/": {
        console.log(a/b)
        break;
    }
    default: {
        console.log("Invalid operation")        //no break
    }
}



// return meh console.log matt karna ; return "message"