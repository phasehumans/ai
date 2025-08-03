# yeild fun use when obj iterable nahi hai; so loop bahar execute ho aur value genrate kare 
# but continue kare def ke ref se

def even_gen(limit):
    for i in range(2, limit+1, 2): #excluive aur skip karu 1 number
        # return i
        yield i

# print(even_gen(6)) ; sirf 2 print ho raha hai, kyu ki return par fun stop hota hai

for num in even_gen(10):
    print(num) # when return i  use --> int object is not iterable; list, file, dict and range are iterable, int iterable nahi hai