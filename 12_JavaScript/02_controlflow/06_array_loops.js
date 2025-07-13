/* 
array: 
- for each
- filter
- map
- reduce
*/

// -------------------  for each    ------------------
const clr= ["red", "green", "orange", "purple", "white"]

clr.forEach(function(elmt){
    console.log(`color is ${elmt}`);
})

clr.forEach((elmt)=>{
    console.log(`color --->  ${elmt}`);  
})


// ---------------------    filter  -----------------------------

const nums= [1,2,3,4,5,6,7,8]

// filter returns value that satisfy condn
const filternum= nums.filter((num)=>{       //if {scope open} use return
    return num > 4
})

const filNum= nums.filter((num)=> num > 6)

console.log(filternum);
console.log(filNum);
console.log(nums);      //changes are filternum, filNum








