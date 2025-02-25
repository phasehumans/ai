password="Chaitanaya@123"
length=len(password)

if length<6:
    status= "Weak"
elif length<10:
    status="Medium"
else:
    status="Strong"

print("{} Password".format(status))