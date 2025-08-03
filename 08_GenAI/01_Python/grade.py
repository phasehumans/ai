score=33
if score<35:
    grade= "F"
elif score<=60: # >= and <=
    grade= "C"
elif score<80:
    grade= "B"
elif score<= 100:
    grade= "A"
else:
    grade="Invalid Score"
print(grade)


# use exit() to stop at invalid score opt +100
score_new= 33
if score_new>100:
    print("Invalid Score")
    exit() # to exit; use this inside or it exit whole program

if score_new>= 90:
    grade= "A"
elif score_new>= 70:
    grade= "B"
elif score_new>= 60:
    grade= "C"
elif score_new>= 35:
    grade="D"
else:
    grade="Fail"

print(grade)