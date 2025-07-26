n= int(input())

num = n

res= 0
while num > 0:
    ld= num % 10
    # num= num // 10
    res= res * 10 + ld
    num = num // 10

if res == n:
    print("Palindrome")
else:
    print("Not Palindrome")
