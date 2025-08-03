# reverse string

input_str= "chetan sonawane"
rev=""

for char in input_str:
    # add on: ignore space format
    if char==" ":
        continue
    rev= char+rev # char at first then rev added at last; so new char added to first
print(rev)


# reverse using str fn (stepsize)
str_ip= input("enter str: ")
print(str_ip[::-1])