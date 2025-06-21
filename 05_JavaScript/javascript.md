# JavaScript

## Variable
- let: can update and redeclare
- const: can't update and redeclare
- var is not used (hoisting err | fn scope err)


## DataTypes

### Primitive
- immutable
- call by value

1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol -> used to create unique indetifiers

### Non-Primitive / Reference
- mutable
- call by ref

1. Object -> collection of key value pair  { }
2. Array -> [ ]


## Operators
1. arithmetic: + - * / % **
2. comparision: < > >= <= == ===(strict check) !=
3. logical: && (and), || (or), !(not)
4. bitwise: & | ! ^ (XOR)
5. assign: =
6. nullish coalescing: ?? returns RH value when LH is null


## Memory in JS

### Stack

### Heap


## Strings
- used to hold data that is represented in text form
- immutable

#### Methods
- str[index] --> access char  
- str.charat(index) --> acces char
- length  
- toUpperCase()  
- toLoweCase()
- indexof("value")
- inclues("value") --> T/F
- slice(start,end)
- replace("old", "new")
- trim() --> remove spaces
- split(separator, limit)
- repeat(interval)
- concat(" ", str2) --> join two str; str1 + str2


## Arrays
- used to store multi values in single var
- dynamic and hetro elmt

#### Methods
- push() --> add at last
- unshift() --> add at first 
- pop() --> remove last emlt
- shift() --> remove first elmt
- indexof() --> returns index of search emlt (-1)
- findindex() -->  returns the index
- includes() --> T/F
- foreach() --> iterate over array, modify og
- map() --> iterate, not modify og  
array.map(callback(element, index, array), thisArg);
- reduce --> reduce arr to single value and return single value
- filter() --> return filter arr based on condn, not change og
- sort() --> sort
- reverse() --> reverse, modify og


## Objects
- collection of key value pair 
- Objects --> Represent Properties, Methods[Functionalities]
- Properties -->  Attribute: Color, weight etc.
- Method -->  Actions, functions

## Control Flow
- conditionals
- iteration / loop

### Conditionls
- if = agar ye condition true hai
- else if = warna agar dusri condition true hai
- else = sab galat ho gaya toh ye karo

Ternary: condition ? expressionIfTrue : expressionIfFalse;  

Switch: used to test one variable or expression against multiple possible values  
- break
- default
- case


## Functions
- reusable block of code
- Arrow function: consise way to write fn  
- IFFE: Immediately Invoked Function Expression : execute immediately after defination  
- higher order fn: fn that take another fn as argument
- recursive fn: fn calls itself


### Closures





