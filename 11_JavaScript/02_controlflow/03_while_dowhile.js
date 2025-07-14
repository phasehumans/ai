/* 
loops:
- for
- while
- do while

*/

// while loop
let index= 0
while(index <= 10){
    console.log(`value of index is ${index}`);

    index= index + 2    //loop termination
}

// do while :execute then check condn (min 1 time is executed)
let i= 1
do {
    console.log(`value is ${i}`);
    i++
    
} while (i <= 10);


let j= 11
do {
    console.log(`less than 10 -->  ${j}`);
    j++
    
} while (j <= 10);