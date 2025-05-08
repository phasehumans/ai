// iteration : reuse the code block

/* 
For loop:
- loop - iteration
- variable leke aao
- limit btao
- incre/decre => i = i + 1
*/
const arr= [16,42,73,49,57,65]
for(let index= 0; index < arr.length; index++){
    console.log(`${index + 1}st elment is ${arr[index]}`)
}


for (let i= 0; i<=5; i++){
    console.log(`${i}`);
    
    for(let j=0; j<=5; j++){
        console.log(`outer loop ${i} and inner loop ${j}`);
    }
}


function gifts(total,friends){
    let giftsgiven = 0;
    for (let i=0; i<friends; i++){
        if (total>0){
            total --;
            giftsgiven ++ ;
        }
       
    }
    return giftsgiven

}
console.log(gifts(10,30))


// break and continue