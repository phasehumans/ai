marks= int(input("enter marks: "))

if marks > 100 or marks < 0:
    print("invalid marks")
    exit()

if marks >= 90:
    print("A")
elif marks >= 70:
    print("B")
elif marks >= 50:
    print("C")
elif marks >= 40:
    print("D")
else:
    print("F")
