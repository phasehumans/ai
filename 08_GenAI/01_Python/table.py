# print table but skip 5th iteration

number=9

for i in range(1,11):
    # if i!=5:
    #     ans=number*i
    #     print("{} X {} = {}".format(number,i,ans)) # this is also gc
    
    if i==5:
        continue # keyword detect and skip that iteration
    ans=number*i
    print("{} X {} = {}".format(number,i,ans))



# print table
num= int(input("enter num: "))
for i in range(1, 11):
    ans= num*i
    print(f"{num} X {i} = {ans}")

