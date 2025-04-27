// fn : reusable block of code

function fn_name (fname) {          // parameter- fname (placeholder)
    return console.log(`${fname} sonawane`)
}

fn_name("chaitanya")        //value pass in fn is argument


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