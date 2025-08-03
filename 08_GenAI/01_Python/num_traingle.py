ip = int(input())

for i in range(1, ip + 1):
    for j in range(1, i+1):
        if j == 1:
            print(j , end= " ")
        elif j == i:
            print(j , end= " ")
        else:
            print(0 , end= " ")
    print()

""" 

1 
1 2 
1 0 3 
1 0 0 4 
1 0 0 0 5 

 """