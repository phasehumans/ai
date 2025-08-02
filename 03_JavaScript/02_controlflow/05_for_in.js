// for of doesnot support obj;
// for in: Iterates over keys (property names)

const myObject = {
    py: "python",
    js: "javascript",
    cpp: "c++",
    rb: "ruby"
}

for (const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const marvel= ["ironman", "spiderman", "thor", "vision"]
for (const key in marvel) {
    // console.log(key);      --> index as key 0,1,2,3
    console.log(marvel[key]); 
}

// maps is not iterable (no keys)