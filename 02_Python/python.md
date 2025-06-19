# Python
- dynamically typed 
- python -m venv myenv
- myenv\Scripts\activate    


### Variable
- dynamic typed
- const
- variable

### Datatypes

primtive:
- int
- str
- float
- boolean
- complex

non primtive:
- list 
- dictionary
- tuple
- sets


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
2. comparision: == > < >= <= 
3. logical: and or not
4. bitwise: & (and), | (or), ~ (not), ^ (xor)
5. memebership: in , not in


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

### Iterations

for -> continue till constraints

for i in range(start, end, stepsize):   
// logic

while -> contiue as long condn is true

- break: exit loop
- continue: skip that specific iteration
- pass: null opt (marker)
- exit: exit program

### Shallow copy:
a= [1,2,3, [36, 38, 40], "apple"]   
b= a[:] --> a is copied in b    

1st layer will diff, but 2nd layer is same, shallow copy   
soln: serialization & deserialization


### Functions
