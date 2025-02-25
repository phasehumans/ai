a=1
b=2
c=3
print(a,b)
print(a+b)

print(a,b,c)
print(a*2, b/2, c%2)

print(b**2) #power
print(2**100)

print('chaitanya')
#repr
#str


print(5>3)
print(5==3)
print(2<3 and 3>5) #both true then true
print(2<3 or 3>5) #any one true then true
print(1==3>2) #1 is true
print(1==1<5) 


import math
print(math.floor(3.5)) #closest bottom number
print(math.floor(-7.4))
print(math.floor(35.9))

print(math.trunc(5.9)) #close to zero
print(math.trunc(-5.9))
print(math.trunc(0.9))

print(oct(64)) #decimal to octa
print(hex(64))
print(bin(64))


import random
print(random.random()) #random number 
print(random.randint(3, 9))

letter= ['a', 'b', 'c', 'd', 'e'] #choice from list
print(random.choice(letter))

random.shuffle(letter) #shuffle the list
print(letter)
random.shuffle(letter) #shuffle the list
print(letter)



# Decimal context manager
wd=0.3+0.3+0.3
print(wd-0.9)

from decimal import Decimal
sd= Decimal('0.3')+ Decimal('0.3')+ Decimal('0.3')
print(sd-Decimal('0.9'))
# here error occuer; sys import number but already file name exist number --> numberr


# Fractions
from fractions import Fraction
fra= Fraction (2, 3)
print(fra)


#Boolean
print(True==1) 
print(True+68) #internal true is 1 and false is 0
print(False-1)

