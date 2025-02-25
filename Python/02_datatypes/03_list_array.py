# arrays (list) is mutable; stores number, string and other list


l1=['1','2','3','4','5','6'] # elements are character / string
l2=[1,2,3,4,5,6,7] # elements are number 
print(l1)
print(l2)
print(l1[1:4])
l1[2]=69 # index replacment
print(l1)


# list base on userinput string
fruits= input().split()
print(fruits)


# list abse on userinput nuumbers
user_num= list(map(int, input().split())) # map() use to convert datatypes
print(user_num) 


# replacement
chai=["masala", "ginger", "green", "herbal", "black"]
print(chai)
chai[2]="olive green"
print(chai)
chai[2:3]="olive green" # last is exclusive
print(chai) # each letter is treated as separte element 
chai=["masala", "ginger", "green", "herbal", "black"]
chai[2:4]="olive green", "black label"
print(chai)
chai[2:4]=["olive green", "red label"]
print(chai)


num=[1,2,3,4,5,6,7,]
if '7' in num:
    print("Yes")
else:
    print("No")




# append() :insert(position,'value')- add at specific
# pop() :  remove()
num.pop() # remove last element
print(num)
num.remove(3) # remove from specific place
print(num)

num.insert(1,'9') # insert at specific location
num.insert(0,'8')
num.append(99) # insert in last
print("List after insert and append", num)


num_copy=num # list is mutable so changes in both
print(num_copy)
num.pop()
print(num)
print(num_copy)


num_copy=num.copy() # .copy() passes the copy refernece to num_copy variable; no changes in both list
print(num_copy)
num.pop()
print(num)
print(num_copy)


# python is exclusive, it doesn't include the last number that is define : range(0,10)
# here range will be [0,1,2,3,4,5,6,7,8,9] : last num not include
cube_num= [x**3 for x in range (5)] # caln inside list 
print(cube_num)



