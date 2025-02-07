let myArray = [1,2,3,4,5]

function sumkaro(num){
    let sum= 0;

    for(i=0; i< num.length; i++){
        sum= sum+ num[i]
    }

    return sum;
}

let result= sumkaro(myArray);
console.log(result)

let result1= sumkaro([2,4,6,8,4])
console.log(`result ${result1}`)