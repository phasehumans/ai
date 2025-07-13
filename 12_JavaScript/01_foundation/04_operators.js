// arithmetic operators: +-*/%
console.log(1+2)
console.log(11%2)
console.log(8743278*234)
console.log(9**2)           // square 

let a= 10
let b= 487
console.log(`addition ${a+b}`)
console.log("add", a+b)


// logical operators : && AND , || OR 


// comparision operators:
let qt= 26
let qt2= 24
let strqt= "26"

console.log(qt==qt2)
console.log(qt==strqt)      //true
console.log(qt===strqt)     //false; also checks datatype ( strict check)


// this conversion don't give predictable results
// X compare diff datatypes
console.log("2">1);

// both gives unpredictable results. 
console.log(null > 0);  //false
console.log(null >= 0); //true


// != not equal to
// <> less than greater than 
// <= >= 



// operator precidience:bracket > / > * > + > -
console.log(2*5+4-(5*2));


/*
prefix: i++ 
postfix: ++i
 */