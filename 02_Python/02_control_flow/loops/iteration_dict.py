mydict= {'a':1, 'b':3, 'c':3}
ref= iter(mydict)

# iter --> iterable

print(ref)
print(next(ref)) # pass the ref
print(next(ref))
print(next(ref))
# print(next(ref)) # stop iteration


#normal approach
for key in mydict.keys():
    print(key)