# immutable cant be change, genarte again in memory- int, string, tupple ; (stone)
# mutable gets change- list, dict, set ; (notebook)


# list is mutable
l1=[1,2,3]
l2=l1[:] # copy data from l1 to l2 : same as l2[1,2,3]
l1[1]=9
print(l1)
print(l2) 
# l1 and l2 have same data but not same reference (diff block)
# l1 = l2 value same but l1 is not l2


l1=[1,2,3]
l2=l1 #---> pehle wale meh l1 se ref liya. aur asme l2 = l1 ; same changes hoge
l1[0]=9
print(l1)
print(l2)
# same reference for l1, l2



# int is immutable
x=10
y=10
x=15
print(x)
print(y)


x=10
y=x
x=15
print(x)
print(y)
# int immuttable: y=x same reference but still 2 block; diff value

