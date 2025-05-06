let clrs= ['red', 'green', 'yellow', 'blue', 'white']

console.log(clrs)
console.log(clrs[2])

clrs[0]= 'beige'
console.log(clrs)

// Array Methods: arr.method

console.log(clrs)
console.log(clrs.length)        // clrs.length() x

clrs.push('silver')        // push: add at last elmt
console.log(clrs)

clrs.pop()                  //  pop: removed last elmt
console.log(clrs)

clrs.unshift('purple')      // unshift: added elmt at index 0
console.log(clrs)


let newclrs = ['neon', 'pink']
let allclrs= clrs.concat(newclrs);      // concat: to add arrays
console.log(allclrs)


let x= 2
// console.log(`index of ${index} is ${clrs(index)}`) ----> error
console.log(`index of ${x} is ${clrs.at(x)}`)       // access index as using var


console.log(clrs.copyWithin(3,0))      // shallow copy inn same array
// 0 index ke value , 3 index meh copy


// clrs key-value pairs in itr as array iterator (traverse array one by one)
let itr= clrs.entries()
console.log(itr.next().value) // next index 
console.log(itr.next().value)
console.log(itr.next().value)
console.log(itr.next().value)


// checks condn (fun) on every elmt of array and returns T/F
function condncheck (elmt) {
    return elmt.length < 5     
}
console.log(clrs.every(condncheck))


// fliter array based on condn .filter(callbackfn, thisArg)
const lengthclrs= clrs.filter((clrs) => clrs.length < 6)
console.log(lengthclrs)


// .find returns the 1st elmt that satisfy the condn, if not then undefined
const findclrs= clrs.find((clrs) => clrs.length < 6)
console.log(findclrs)


// similar to find but returns index and undefined as -1
const findIndexclrs= clrs.findIndex((clrs) => clrs.length < 6)
console.log(findIndexclrs)


// similar to .find but iterate from last elmt
const findlastclrs = clrs.findLast((clrs)=> clrs.length < 6)
console.log(findlastclrs)


// similar to findLast but return index
const findlastindexclrs= clrs.findLastIndex((clrs)=> clrs.length < 6)
console.log(findlastindexclrs)


// forEach : travrse array and execute condn elmt
console.log(clrs.forEach((elmt)=> console.log(`this colour is ${elmt}`)))


// include ("value"): check for value and return T/F
console.log(clrs.includes('green'))
console.log(clrs.includes('red'))


// .indexOf('value'): return index of 1st elmt that value is found or return -1
console.log(clrs.indexOf('green'))


// join: return index as string
console.log(clrs.join())
console.log(clrs.join(""))
console.log(clrs.join(" "))
console.log(clrs.join("-"))


// .map(callbackfn) : returns new array based on fn oprt on each elmt
const mapclrs= clrs.map((elmt)=> elmt.slice(2,4))
console.log(mapclrs)


// .reduce(callback(accumulator, currentValue), initialValue);
// callback → A function that runs on each element.
// accumulator → Stores the result of previous calculations.
// currentValue → The current array element being processed.
// initialValue (optional) → The starting value for the accumulator.
const reduceclrs= clrs.reduce((acc, currentValue) => acc + currentValue.length)
console.log(reduceclrs)

const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(sumWithInitial);


// .reverse() : reverse the array
console.log(clrs.reverse());


// shift() : remove first emlt
console.log(clrs.shift())
console.log(clrs)


// .slice(start, end): returns shallow copy of sliced array orignal is not modified
console.log(clrs.slice(1,3))
console.log(clrs)


// .sort : sort array ascending UTF-16
console.log(clrs.sort())


// .splice (index, kitne, value) : change the content of array by removing, adiing or replacing elmt
clrs.splice(1,0,'silver')   // added silver at index 1
console.log(clrs)
clrs.splice(4,2, 'lavendar')        // replace 2 elmt with lavendar 
console.log(clrs)
clrs.splice(0,1, 'yelllow')     // replace 1 elmt beige with yellow
console.log(clrs)


// .toSpliced: simlar to splice but not modify og array
const spliceclrs = (clrs.toSpliced(1,0,'gold'))
console.log(spliceclrs)


// toLocalString() : returns string representing array elmt
const arr1 = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
const localeString = arr1.toLocaleString("en", { timeZone: "UTC" });
console.log(localeString);


// toReversed : reverse array but not modfigy og array
console.log(clrs.toReversed())
console.log(clrs)
console.log(clrs.reverse())     // changes og arr
console.log(clrs)


// values(): works as loop, returns value of elmt
const itr2= clrs.values()
for (const value of itr2){
    console.log(`color is ${value}`)
}


// with(index, value) : changes value at index ; 
// copying: shallow copy
console.log(clrs.with(0, 'grey'))
console.log(clrs)