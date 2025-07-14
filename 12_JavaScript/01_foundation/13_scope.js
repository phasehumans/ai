/* 
scope:
- global scope
- local scope : inside {}

*/

let a= 10
let b= 20

console.log(a);
console.log(b);

if (true){
    // local scope
    var c= 69       //local var
}

console.log(c); //local var in global scope; let and const doesnot support
// var support (bug) --> let is use over var


function example(x,y){
    console.log(a);         //global var in local scope {local scope}
    let localvar= 69
}
example()


// console.log(localvar);      //ReferenceError: localvar is not defined
// console.log(localvar2);



function one(){
    const username= "chaitanya"

    // for TWO , ONE is global scope
    function two(){
        const website= "youtube"

        console.log(username);
        
    }
    // console.log(website);        //website is defined in local scope
    two()
}

one()
// two()       //ReferenceError: two is not defined --> defined in local scope


//----------------  hoisting : execution context    ------------

function addOne(num){
    return num + 1
}
console.log(addOne(3));


// console.log(addTwo)  ---> ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
console.log(addTwo)     //[Function: addTwo]
console.log(addTwo(3));
