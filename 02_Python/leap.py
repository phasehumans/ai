year=2028
if year%400==0 or (year%4==0 and year%100!=0):
    ans="Leap"
else:
    ans="Not Leap"
print("{} is {} Year".format(year,ans))
