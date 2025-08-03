# price should approach as int

age= 16
day= "Saturday"

if age> 17:
    if day=="Wednesday":
        print("$10")
    else:
        print("$12")
else:
    if day=="Wednesday":
        print("$6")
    else:
        print("$8")



# gc

price=12 if age>17 else 8

if day=="Wednesday":
    price= price-2
print("Ticket Price is ${} for {}; Thank You".format(price, day))


# assign var based on condn
marks= int(input("enter marks: "))
remark= "Pass" if marks > 40 else "Fail"
print(remark)
