const arr= [1,2,3,4,5,6]

// .forEach function

// real signature ko samjho--- kya return karta hai ----> undefined(no return)
// function input - value , index
// haar ek index par jaakar value return karta hai

arr.forEach(function(value, index){
    console.log(`value at index ${index} is ${value}`)
})

if (!Array.prototype.myForEach) { // for test myforEach

    Array.prototype.myForEach = function (userFn) { // userfn- function provided- value and index
  
      const originalArr = this; // Current Object ki taraf point karta hai; kon call kar raha hai-- arr( arr is this)
  
      for (let i = 0; i < originalArr.length; i++) {
        userFn(originalArr[i], i);
      }
    };
  }


  arr.myForEach(function(value, index){
    console.log(`my for each value at index ${index} is ${value}`)
})
