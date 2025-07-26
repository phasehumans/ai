n= int(input())

num = n
count= 0
while num > 0:
    num= num // 10
    count+=1

print(count)

# -----------------------
from math import log10
import math
num2= n

res= log10(num2) + 1
print(math.floor(res))
