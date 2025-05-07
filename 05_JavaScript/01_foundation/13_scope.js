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


