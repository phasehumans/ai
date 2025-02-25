# ITERAATION INNER-WORKING:
# iterator --> iterable obj ---> __next__ 
# iterator (loop) ask to obj (list, file) are you iterable then obj passes next() to confirm to iterator i.e loop; 
# if next() is not passed then loop stop.

f= open('chai.py') # file import and store in f
print(f.readline())
print(f.readline())
print(f.readline())
print(f.readline()) # no stop iteration display;

for line in open('chai.py'): # iteration using loop
    print(line, end='') # end without next line



# print(f.__next__())
# print(f.__next__())
# print(f.__next__())
# print(f.__next__()) # upper 3 executed but at this next(); none so it display stop iteration; inner working of loop


