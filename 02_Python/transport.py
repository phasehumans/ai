dist= 15

if dist<3:
    mode="Walk"
elif dist<=15:
    mode="Bike"
else:
    mode="Car"
print(mode)   