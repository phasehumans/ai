// use to determine the flow of program
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