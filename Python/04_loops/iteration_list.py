# list, file, dict and range are iterable

mylist = [1,2,3,4]

x= iter(mylist) # file have default iter
print(x) # points obj at x memory location

print(x.__next__())
print(x) # loc not change

# when file is store and taken as ref then that ref is iterable obj 
# but when list is not iterable obj iter(mylist) is mylist --> false 


