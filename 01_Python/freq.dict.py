def get_word_frequencies(input_str):
    # Your code here
    arr= input_str.split(" ")
    
    count= {}
    for i in arr:
        if i in count:
            count[i]+=1
            # count.get(i, 0) + 1
        else:
            count[i]=1

    return count


input_str= "data science is fun and data is powerful"
print(get_word_frequencies(input_str))

