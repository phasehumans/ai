exports.add = function (a,b) {
    return a+b;
};


const sub = function(a,b){
    return a-b
}

// alternate way to create export fn
const multi = function(x,y){
    return x*y
}
exports.multi= multi

// default export (one default only per)
// module.exports = function(){
//     return "this is default export"

    // can also export other fn as obj
// }


// export all fn as obj
module.exports={
    sub,
    multi,
}