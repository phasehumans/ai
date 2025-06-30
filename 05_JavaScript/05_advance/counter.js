// increment counter
function incre(){
    let count= 0;       // count ko koi global meh acess na kar paye

    // Closure fn (fn binded by its lexical scope)
    return function increCount (){
        count++
        return count;
    };
}

console.log(incre())

// both has seperate counter x and y
let x= incre()
let y= incre()

console.log(x())
console.log(y())
console.log(x())
console.log(x())
