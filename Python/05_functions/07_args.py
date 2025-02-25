# *args are use to handle multiple arguments

def sum_all (*args):
    print(args) # treated as tuple without *
    print(*args)

    # can do operations on args elements

    for i in args:
        print(i*2)

    return sum(args)


print("sum of elements -->", sum_all(1,2,3,4,5))

