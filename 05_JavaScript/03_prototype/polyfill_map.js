const arr= [1,2,3,4]

// Signature .map
// Return? - New Array, Each ele Iterate, userFn


if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (userFn) {
      const result = [];
  
      for (let i = 0; i < this.length; i++) {   // this.length --> jo array userfn se ayega uske length, uska index -- this[it]
        const value = userFn(this[i], i);
        result.push(value);
      }
  
      return result;
    };
  }




const n = arr.map((e) => e * 2);
const n2 = arr.myMap((e) => e * 3);


console.log(n);
console.log(n2);