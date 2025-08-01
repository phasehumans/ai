# input from user till num b/w 1-10

while True: # acts as infiniite loop
    num = int(input("enter:"))
    if num<=10 and num>=1: # 1<= num <= 10:
        print("Thankyou")
        break # to break loop
    else:
        print("invalid")