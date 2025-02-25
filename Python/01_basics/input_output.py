# x= input()
x= int(input("enter value"))
print(x)

a, b, c = map(int, input().split())   # assigns integer input values to variables a, b and c


# multiple assign var using one string input
name, verb, place = input().split() # default input as string
print(name, "is", verb, "in the", place)




n = int(input())
for i in range (1,11):
    # ans=n*i
    # print("{} x {}= {}".format(n,i,ans))
    print(n,"x",i, "=", n*1)