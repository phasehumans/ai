# x= input()
x= int(input("enter value: "))
print(x)

a, b, c = map(int, input().split())   # assigns integer input values to variables a, b and c
print(a)
print(b)
print(c)

# multiple assign var using one string input
name, verb, place = input("enter the name, verb & place: ").split() # default input as string
print(name, "is", verb, "in the", place)


# multi input as int
a1,b1,c1= map(int, input("enter the number a,b,c") .split())
print(a1)
print(b1)
print(c1)


n = int(input())
for i in range (1,11):
    # ans=n*i
    # print("{} x {}= {}".format(n,i,ans))
    print(n,"x",i, "=", n*1)