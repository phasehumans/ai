""" 
Inheritance:
- child class can have its parents attributes and can also creates its own attributes

Polymorphism (many forms):
- depend upon class, methods logic gets change

Abstraction:
- focusing on essential characteristics while hiding unnecessary details

Encapsulation:
- bundling data(attributes) and methods (fn) that operate on that data into a single unit, i.e class


Types of inheritance:

 """

# encapsulation
class Account:
    def __init__(self, account_number, account_holder, balance):
        self.account_number= account_number
        self.account_holder= account_holder
        self.balance= balance

        # self represent instance of class
        # accnum, balance .. are attributes of self

        # _init_ -> constructor

    def deposit(self, amount):
        if amount > 0:
            self.balance+=amount
            print(f"Deposited {amount}, new balance is {self.balance}")
        else:
            print("Deposit amount must be positive")

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance-= amount
            print(f"Withdrawn {amount}. New balance is {self.balance}")
        else:
            print("Insufficent balance")

    def display (self):
        print(f"Acc Number : {self.account_number} , Balance: {self.balance}")


# inheritance
class SavingAcc(Account):
    def __init__(self, account_number, account_holder, balance, interest_rate):
        super().__init__(account_number, account_holder, balance)
        self.interest_rate= interest_rate
    
    # polymorphism
    def display (self):
        print(f"Savings Acc Number : {self.account_number} , Balance: {self.balance} , Intrest Rate: {self.interest_rate}")

    def addinterest (self):
        interest= self.balance * self.interest_rate / 100
        self.balance += interest
        print(f"Intrest added {interest}, New balance : {self.balance}")
    

class CurrentAcc(Account):
    def __init__(self, account_number, account_holder, balance, od_limit):
        super().__init__(account_number, account_holder, balance)
        self.od_limit= od_limit

    def withdraw(self, amount):
        if amount <= self.balance + self.od_limit:
            self.balance-= amount
            print(f"Withdrawn amount is {amount}, Current Balance: {self.balance}")
        else:
            print("Insufficent balance and OD limit")
        
    
    def display(self):
        print(f"Current Acc:{self.account_number}, Balance: {self.balance}, Overdraft limit: {self.od_limit}")


if __name__== '__main__':
    # creating object (acc1, acc2 ..)
    acc1= SavingAcc("SA390", "Chaitanya Sonawane", 10000, 3)
    acc2= CurrentAcc("CA473", "Rajeshri Bhamre", 100000, 25000)


# here it is public attribute --> make it private
print(acc1.balance)

# abstraction
acc1.deposit(20000)
acc1.addinterest()
acc1.display()


acc2.deposit(50000)
acc2.display()
acc2.withdraw(125000)




