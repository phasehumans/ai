# The if keyword means "Check if this condition is true; if it is, then execute the following code."
# The elif keyword means "If the previous conditions were not true, then check this condition."
# The else keyword means "If none of the previous conditions were true, then execute the following code."


# user from input is not working: infinite memory error
age= 15
if age<13:
    print("Child")
elif age<20: # else if
    print("Teenager")
elif age<60:
    print("Adult")
else:
    print("Senior")