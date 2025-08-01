def maximize_profit(stock_prices: list[int]) -> int:
    # Your code here
    maxprof= 0
    for i in range(len(stock_prices)-1):
        min_value= stock_prices[i]
        # print(min_value)

        # loop should start from again just agle value values
        for j in range(i,len(stock_prices)-1):
            # print(j)
            # print(max_value)
            max_value= stock_prices[j+1]
            # print(max_value)
            res= max_value - min_value
            # print(f"i= {i} min= {min_value} j= {j} max= {max_value} res= {res}")
        # if res > maxprof:
            # maxprof = res
            if res > maxprof:
                maxprof= res
    return maxprof
    
# lst1= [7,1,5,3,6,4]
lst2= [12,11,15,3,10]
# print(maximize_profit(lst1))
print(maximize_profit(lst2))


# err was of if identation