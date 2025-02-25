# fun ke iden : badh wale statement --> scope / name space
# fun create then memmory meh separate block is create (alag sa ghar memory ke andar)
# ghar ke andar ka var ka access bhar nahi milta --> ghar ke bathe bahar nahi jati par bahar ke bathe andar aa sakte hai


username= "chaitanya"

def fun():
    username= "chetan"  # aur agar fun ke andar ka username comment karde toh; chiatnaya print hota hai
    print(username)


print(username)     # global var consider hoga kyu ki fun call he nahi kiya
fun()    # local var print hota hai 


