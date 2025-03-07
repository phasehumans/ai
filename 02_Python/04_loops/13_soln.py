# power of a number


n,m= map(int, input().split())

result=1

for i in range(m):
    result= n*result
    
print(result)
    