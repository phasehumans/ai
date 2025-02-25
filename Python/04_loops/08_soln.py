# prime number

number=5
i=2
count=0
while i <= number:
    if number%i==0:
        count=count+1
    i= i+1

if count==1:
    print("PRIME")
else:
    print("NOT PRIME")