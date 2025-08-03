# area and circum of circle

import math
def circle(radius):
    # return ke badh wale execute nahi hote; so store area and circum and then return both
    
    area= math.pi*radius**2
    circum= 2*math.pi*radius
    return area, circum

# eksath dono print nahi hote; store them in var

a,c= circle(4)
print("area of circle -->", a, "\ncircum of circle is --> ", c)

