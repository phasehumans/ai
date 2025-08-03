# while: counter intilization and updation statment
# for : no updation statment

numbers= [1,-2,3,4,5,5,6,7,-7,2,10]
positive_number_count= 0

for superman in numbers: # superman is each element name
    if superman>0:
        positive_number_count= positive_number_count+1

print(positive_number_count)