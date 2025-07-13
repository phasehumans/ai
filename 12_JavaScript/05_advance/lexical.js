let fname= "chaitanya"


// let fname= chetan
// Cannot redeclare block-scoped variable 'fname'.

function say(){
    let fname= "chetan"     //  par idhar toh redeclare ho gaya;

    // FEC ke memory meh declartion howa hai, not in GEC(global execution context)

    // if fname not declare in FEC it searches in scope and scope as parent ref

    function innersay (){
        let fname= "sonawane"
        console.log(fname)
    }
    innersay()

    console.log(fname)
}

console.log(fname)
say()
// innersay () --> inner fn ko meh global call nahi kar sakta ho; FEC 





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
