set1= {1,2,3,4,5}
set2= {2,4,6,9}

print(set1&set2) #intersection
print(set1|set2) #union
print(set1-set2) #diffrences


# convert tuple --> set
tup=(1,2,2,3,4,5,9,7,7,6)
set3= set(tup)
print(set3)