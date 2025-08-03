# tuple is immutable and list is mutable
# [] -> list : mutable, order
# {} -> dictonaries: mutable, unorder
# () -> tuple: imutable (assign not possible), order
# {} -> set: mmutable, unorder

names= ("chetan", "bhavesh", "kaustubh", "anant", "sachin", "jayesh")
print(names)
print(names[2])

# names[3]= "anand"  : can't change specific value // item assigment because immutable


# combine multiple tuples, list
new_names= ("lokesh", "harshal", "vinod", "pranav", "harshal")
all_names= names+new_names
print(all_names)


# questioning using if 
if "anant" in new_names :
    print("new tuple")
else:
    print("not in new tuple")


# counting in tuple
count= new_names.count("harshal")
print(count)


# assingn var to data //unwrap
(sonawane, patil, salunkhe, deore, chaudhari, girase)= names
print(sonawane,patil, salunkhe)

