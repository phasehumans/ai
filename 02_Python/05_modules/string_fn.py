# reverse
def reverse(str):
    return str.reverse()

def palindrome_check(str):
    if str==str[::-1]:
        return True
    else:
        return False
    
def concat_str(str1, str2):
    return str1 + str2

def len_str(str):
    return len(str)

