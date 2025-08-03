# sum of even number

number= int(input("Enter value"))
sum= 0

for i in range(1, number+1): # range is exclusive; last not count 
    if i%2==0: # i is iterator
        sum=sum+i

print(sum)

# range (start, end, stepsize)

# range(start, stop) not include stop value - exclusive
# range(start, stop, increment)
# range (stop)
