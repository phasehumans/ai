def add(a,b):
    return a+b

def substract(a,b):
    return a-b

def multi(a,b):
    return a*b

def division (a,b):
    if b==0:
        return "cannot divide by zero"
    else:
        return a/b

def square(a):
    return a**2

def cube(a):
    return a**3

def factoraial(a):
    if a==0 or a==1:
        return 1
    else:
        return a* factoraial(a-1)