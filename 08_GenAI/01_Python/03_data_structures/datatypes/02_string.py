
name= 'chaitanya'
print(name)
name= "chaitanya"
print(name)
name= """chaitanya""" #structure
print(name)


# slicing [start:end :stepsize ] # end is exclusive
num='0123456789'
print(num)
print(num[3:6]) #slicing
print(num[:7])
print(num[::2])   # step # -1 step to print reverse string




fname="chAItanya sonawane"
print(fname.lower()) #lower and upper method/fun
print(fname.upper())
print(fname) #string immutable


#strip
a_name="     why am i writing this                "
print(a_name)
print(a_name.strip()) #webdev: data from user; ignore the spaces from user
print(a_name.lstrip()) #left strip
print(a_name.rstrip()) #right strip


#replace  # string immutable ; can't change without replace()
b_name= "chetan sonawane"
print(b_name)
print(b_name.replace("chetan", "chaitanya"))


#split list
cars= "bmw, honda, audi, civic, porsche"
print(cars.split(", "))


# find
print(cars.find("audi"))
print(cars.find("range rover")) #not found = -1


# count
num="1232333456767784"
print(num.count("3"))


#variable placeholder{}
blue=3
red=2
write="notebook"
sentence= "I want {} blue pens, {} red pens and blank {}."
print(sentence.format(blue, red, write))
print("I want {} blue pens, {} red pens and blank {}.".format(blue,red,write))



#list into string: join operation
l1=["asus", "vivo", "oppo", "samsung"]
print(l1) 
print(" ".join(l1))


#raw string
# said="varun said that"he is going out of town""
# print(said)
said="varun said that \"he is going out of town\""
print(said)


#inspection
d_name="chaitanaya sonawane"
print("ai" in d_name)
print("che" in d_name )