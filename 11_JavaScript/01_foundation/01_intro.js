// assign variable using : let, const and var (use let and const)

console.log("chaitanya")
console.log(`chaitanya`)

// console.log(`chaitanya ${lname}`)       // errror : can't acess lname before intializaztion

const fname= "chaitanya"
let lname= "sonawane"

// fname= "chetan"      ---> error: can't change const value
lname= "patil"

console.log("using const -->",fname)
console.log("using let -->",lname)


// function ka setup
function function_name(kitne){          // (kitne) --> parameter
   
    // function ka kaam
    console.log("Chaitanya Sonawane")
    const a= 10
    const b= 20
    console.log(a+b)
    console.log(`Bring ${kitne} chai`);

};

// function ko call karna
function_name(3);
function_name(17);
function_name();        // undefined

// function_name(); undefined chai