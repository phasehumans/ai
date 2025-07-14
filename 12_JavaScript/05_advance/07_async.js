// async code
sum (2,5, (result)=> {
    console.log("result is ", result)
})

console.log("end of prgrm")
function sum(a,b,cb){
    cb(a+b);
}

