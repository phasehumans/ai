/* 
date obj represents single moment
in time in platform-independent format. 

calculated in ms(milisecond)

*/

let myDate= new Date()

console.log(myDate);                //2025-05-05T13:26:24.451Z
console.log(myDate.toString());     //Mon May 05 2025 18:58:55 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Mon May 05 2025
console.log(myDate.toISOString());  //2025-05-05T13:30:55.259Z
console.log(myDate.toJSON());       //2025-05-05T13:30:55.259Z
console.log(myDate.toLocaleDateString());   //5/5/2025
console.log(myDate.toLocaleString());       //5/5/2025, 7:00:55 pm
console.log(myDate.toLocaleTimeString());   //7:00:55 pm

console.log(typeof myDate)  //object

let myCreatedDate= new Date(2025, 7, 17)
console.log(myCreatedDate.toDateString());      //aug -> 7


// timestamps
let myTimeStamps= Date.now()
console.log(myTimeStamps);
console.log(myCreatedDate.getTime());


console.log(Math.floor(Date.now()/1000));
