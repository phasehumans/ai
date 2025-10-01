#  **kwargs ---> same as args but handles key-value pair

def name_kwargs(**kwargs):
    for key, value in kwargs.items():
        print(f"{key} : {value}") # format print

name_kwargs(name="batman", power= "strength")
name_kwargs(name="iron man")
name_kwargs(name="spider man", power= "web", enemy= "dr.DOM")

