// Problem: Create an array containing different types of teas
const teas = [
  "Green tea",
  "Black tea",
  "Oolong tea",
  "White tea",
  "Herbal Tea",
];
console.log(teas);

// Problem: Add "Chamomile Tea" to the existing list of teas
teas.push("Chamomile Tea");


// Problem: Remove "Oolong Tea" from the list of teas
// Ooolong ka index nikala, agar array meh exist nahi karta toh -1 return karenga 
const index = teas.indexOf("Oolong tea");
console.log(index);

// condn check kare -1 hoga toh no opr preform, 
if (index > -1) {

  // splice meh remove karte hai, 2 hota toh oolong ke badh wal abhi remove ho jata 
  teas.splice(index, 1);
}

// Problem: Filter the list to only include teas that are caffeinated
const caffeinatedTeas = teas.filter((tea) => tea !== "Herbal Tea");

// Problem: Sort the list of teas in alphabetical order
console.log(teas.sort());

const test = ["🐓", "🥚"];
console.log(test.sort());

// Problem: Use a for loop to print each type of tea in the array
for (let i = 0; i < teas.length; i++) {
  console.log(teas[i]);
}

// Problem: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea")
let caffeinatedMyTeas = 0;
for (let i = 0; i < teas.length; i++) {
  if (teas[i] !== "Herbal Tea") {
    caffeinatedMyTeas++;
  }
}

// Problem: Use a for loop to create a new array with all tea names in uppercase
const uppercaseTeas = [];
for (let i = 0; i < teas.length; i++) {
  // uppercase array meh push karo teas[i] aur method toUpperCase
  uppercaseTeas.push(teas[i].toUpperCase());
}

// Problem: Use a for loop to find the tea name with the most characters
let longestTea = "";
for (let i = 0; i < teas.length; i++) {
  if (teas[i].length > longestTea.length) {
    longestTea = teas[i];
  }
}

// Problem: Use a for loop to reverse the order of the teas in the array
const reversedArray = [];
for (let i = teas.length - 1; i >= 0; i--) {
  reversedArray.push(teas[i]);
}
