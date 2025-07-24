# Python
- dynamically typed 
- python -m venv myenv
- myenv\Scripts\activate    


### Variable
- dynamic typed
- const
- variable

### Input & Output
- end= "-"
- sep= ","
- map(int, input().split())


### Datatypes

primtive:
- int
- str
- float
- boolean
- complex
- None

non primtive:
- list 
- dictionary
- tuple
- sets

Type conversion:  
1. implicit type conversion
2. explicit type conversion

### Mutable & Immutable

mutable:
- gets change
- list, dict, set
- call by ref (var points to address in heap)
- stack (var= memory address) ---> heap (actual data)

immutable:
- doesn't change
- int, str, tupple
- call by value
- stack (var= actual data)


### Operators
1. arithmetic: + - * / // %
2. comparision: ==, >, <, >=, <=, !=
3. logical: and or not
4. bitwise: & (and), | (or), ~ (not), ^ (xor)
5. memebership: in , not in
6. assignment: = , +=, -=, *=, /=, //=


### String
- stores char
- immutable
- strip() --> remove blank space
- upper() / lower()
- isupper() / islower() --> T/F
- isalpha() --> str contains only alphabets T/F
- isdigit() --> str contains only digit
- isalnum() --> both and check not empty
- find() --> search substr return index (-1)
- index() --> similar to find, (err)
- count() --> count the occurence
- replace(old, new)
- split(separator) --> returns list
- separator.join(iterable/ str) 
- startswith() --> T/F
- endswith()
- zfill(0 req) --> pad w/0 for uniform str num
- center(num, symbol)  --> center str with symbol around
- split() --> str into segments[]
- .join() --> combine multiple strings into one single string, with a specific separator in between.
- .swapcase()

 
### Data Structures

Lists
- order and mutable
- slower than tupple (mutable)
- hetro elmt
- [1,2,3]
- append() -> insert at last
- insert(index, value)
- pop() -> remove from last
- sort() -> sort by alpha
- reverse() -> reverse list
- list[start:end:stepsize] --> slicing of list

Tuple
- order and immutable
- faster
- hetro elmt
- (1,2,3)

Sets
- undorder and mutable
- unique elmt
- {1,2,3}
- union(), intersection(), difference()
- aggregate fn -> min(), max(), sum()
- clear() --> clear all elmt
- add() --> add value
- remove() --> remove value

Dictionaries
- unorder and mutable
- key value pair
- {"name": "chaitanya", "age": 20}
- keys() --> access keys
- values() --> access values
- items() --> access key-value

### Conditionals
- if 
- else
- elif
- ternary : value_if_true if condition else value_if_false


### Iterations

for -> continue till constraints

for i in range(start, end, stepsize):   
// logic

while -> contiue as long condn is true   

use of flag= true/ false --> to control loop, multi inside condn  

scope of a loop variable extends beyond the loop itself. This means that even after the loop completes, the variable still retains its last assigned value.



- break: exit loop
- continue: skip that specific iteration
- pass: null opt (placeholder)
- exit: exit program
- for else execute a block of code after a loop completes, but only if the loop was not interrupted by a break statement.
- 

### Shallow copy:
a= [1,2,3, [36, 38, 40], "apple"]   
b= a[:] --> a is copied in b    

1st layer will diff, but 2nd layer is same, shallow copy   
soln: serialization & deserialization


### Functions
- block of code that perform specific task, reuse and organise code  
- *args -> multiple arguments
- *kwargs -> keywords args .item()
- lambda fn: small anonymous fn defined using lambda keyword, multi args but one logic
- map fn: iterate over iterable (list, tuple, set, dict)
