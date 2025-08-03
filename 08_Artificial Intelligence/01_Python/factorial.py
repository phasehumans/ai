number=3
factorial=1 # if 0 then ans become 0
number_input=number
while number>0:
    factorial=number*factorial
    number=number-1
print("Factorial of {} is {}".format(number_input,factorial))



# factorial = factorial * interator