let p1 = {
  fname: "Hitesh",
};

let p2 = p1;    //shallow copy

p2.fname = "Piyush Garg";

console.log(p2);
console.log(p1);
