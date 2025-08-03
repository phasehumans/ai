# list: order matter [] ; index-value
# dict: order not matter {} ; key-value

cr= {"imlokesh": "lokesh123", "chaitanya": "Pass@2004", "varun": "Avelon"} # key and value
print(cr)
print(cr["imlokesh"]) # get specific value based on the key
print(cr.get("chaitanya"))


cr["chaitanya"]= "Chetan@123" # to change value
print("New Password : ",cr.get("chaitanya"))


for key, value in cr.items(): # item is pair of key-value
    print(key, value)


if "caitanya" in cr: # searching in dict
    print("username found")
else:
    print("username not found")


print(len(cr)) # length of item (key-value)


cr["imsachin01"]="sc@123" # add item in dict
print(cr)
cr.pop("varun") # key require; no seqn
print(cr)
cr.popitem() # last item added is deleted
print(cr)
del cr["imlokesh"] # delete from the memory
print(cr)


cr_copy= cr.copy() # new rect form for cr_copy
cr["bhavesh1"]="sonawane@1010"
print(cr_copy)
print(cr) # both have different rect memory ref


# dict inside dict
aiml={
    "SY":{"DS":"Bhandare", "OS": "Salunkhe", "M3": "Patil", "EFM":"PK Patil"},
    "TY":{"ML": "xyz", "LLM": "abc", "GenAI": "pqr"}
}
print(aiml)
print(aiml.get("SY"))  # acess dict inside dict
print(aiml["TY"]["LLM"]) # acess key inside dict of dict


cube_num= {x:x**3 for x in range (7)} # x is key the after : x**3 acts as value 
print(cube_num)
cube_num.clear


# dict created from list
cd=["bmw", "audi", "jaguar", "tata"]
print(cd)
default_value= "Car"
dict_cd= dict.fromkeys(cd, default_value)
print(dict_cd)
dict_cd= dict.fromkeys(cd)
print(dict_cd)
dict_cd= dict.fromkeys(cd, cd)
print(dict_cd)



