# greet if no name provide then defalt greet name

def greet(name= "user"):
    return "hello " + name + "!"

print(greet("chaitanya"))
print(greet())

# agar value provide karte hai toh that value is displayed otherwise default value le lete hai;
# default value set nahi karte toh error of missing parameter 
