# find char in string

name= input("enter the str: ")
print(name)

find_char= input("enter char to find: ")
print(find_char)


for i in name:
    if i==find_char:
        n= name.index(find_char)
        print(f"there is {find_char} at {n} position in string {name}")
        break