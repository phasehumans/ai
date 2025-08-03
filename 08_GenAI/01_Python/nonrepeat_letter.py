# first non repeat letter in str

input_str="teectierr"

# for char in input_str:
#     rep= input_str.count(char) # 1st character; loop should stop after finding 1st non-repeat letter
#     if rep==1:
#         print(char)

for char in input_str:
    if input_str.count(char)==1:
        print(char)
        break