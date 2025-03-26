# fun ko call karna fun ke andhar he; exit strategy is imp

def factorial(num):
    if num==0:  # exit plan
        return 1
    else:
        return num * factorial(num-1)   # trees me caln hote hai; 0 tak ane ke badh and reverse caln  

print(factorial(3))