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



# prime

ip_num= int(input("enter number: "))
count= 0
if ip_num >= 2:
    for i in range(2,ip_num+1):
        if ip_num%i==0:
            count= count + 1
    
    if count==1:
        print("prime")
    else:
        print("not prime")

else:
    print("invalid num (num>1)")
