# Fibonacci series

n = int(input())
a = 0
b = 1

print(a, b, end=" ")


for i in range(n-2):
    c = a+b # set currrent number as sum of previous two numbers
    print(c, end=" ")
    # Update a and b as next two numbers
    a = b
    b = c