/* 
fn : reusable block of code 

code after return is unreachable code

*/

function fn_name (fname) {          // parameter- fname (placeholder)
    console.log(`${fname} sonawane`)
}


fn_name  // fn ref
fn_name("chaitanya")    //fn execute, value pass in fn is argument

const result= fn_name("chetan")
console.log(result);        //undefined


// return fn
function add (a,b){
    return a+b
    //code after return is unreachable
}
console.log(add(2,3))


// scope: 
let clr= "gold"

function printclr(){
    let inside_clr= clr
    return console.log("fn indside_clr--> ",inside_clr)
}

printclr()
console.log(clr)        //global var
// console.log(inside_clr)         //err- ReferenceError: inside_clr is not defined ; local var



// callback fn:
function callbckfn (value, callback){

    value= value*2
    console.log(`value is ${value}`)
    callback()
}

const truefn = () => {     // arrow fn
    console.log(`True`)
}

callbckfn(67, truefn) // value and truefn is fn(arrow fn)



// arrow fn: 
const arrfn = ()=> {
    console.log(`this arrow fn`)
}

const arrfn1 = (x) => {
    console.log(`this is arrow fn with ${x}`)
}

arrfn()
arrfn1("parameter")


// rest operator
function calculatePrice(...num1){
    return num1
}

console.log(calculatePrice(200,32,55))

const sum= calculatePrice(5,5,10)
let totalSum= 0
for(let i=0; i<sum.length; i++){
    totalSum = totalSum + sum[i]
}
console.log(totalSum);


// habdleObj in fn

const user= {
    username: "chetan2004",
    password: "12345" 
}

function handleObject (anyobj){
    console.log(`usrename is ${anyobj.username} and password is ${anyobj.password}`);
}
 handleObject(user)