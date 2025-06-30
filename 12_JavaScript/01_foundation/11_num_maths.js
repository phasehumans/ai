const score= 400
console.log(score);


// explcit define
const balance= new Number (7389)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));        //decimals 73689.00


//precision
const otherNumber= 234.84754
console.log(otherNumber.toPrecision(5));
console.log(otherNumber.toPrecision(2));


// tolocalString ; commas
const hundreds= 100000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));


// ----------------------   Math   --------------------------------

// Math is obj
console.log(Math);

// - convert into +
console.log(Math.abs(-4));

// round off
console.log(Math.round(4.8));
console.log(Math.round(4.2));

console.log(Math.ceil(4.2));    //5
console.log(Math.ceil(4.9));    //5
console.log(Math.floor(4.2));   //4
console.log(Math.floor(4.9));   //4


// random 
console.log(Math.random());
console.log((Math.random()*10)+ 1);




