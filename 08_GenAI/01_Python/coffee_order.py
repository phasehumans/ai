size=3
exp= True

if size==1:
    if exp==True:
        order="Small & Extra Shot"
    else:
        order="Small"
elif size==2:
    if exp==True:
        order="Medium & Extra Shot"
    else:
        order="Medium"
elif size==3:
    if exp==True:
        order="Large & Extra Shot"
    else:
        order="Large"
else:
    order="no order"

print("Your coffee order is", order)



# using string conctenate
order="Medium"
extra=True

if extra==True:
    final= order+" coffee with extra shot"
else:
    final= order+" coffee"

print(final)