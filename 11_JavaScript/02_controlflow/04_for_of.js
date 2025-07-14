/* 
array and obj specific loops:
- for of (arrays, map, string)
- for in (obj) 

for...in = Keys (object-based)
for...of = Values (array/iterable-based)
*/

// -----------------    for of  --------------------------------

const arr= [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}


const greet= "hello world!"
for (const element of greet) {
    console.log(element);
}


const map= new Map()
map.set('IN', 'India')
map.set('USA', 'united states')
map.set('UK', 'united kingdom')
map.set('IN', 'India')

// unique values(depend on key) and order is imp
console.log(map);

for (const [key, values] of map) {
    console.log(`${key} --> ${values}`);  
}

// object is not iterable