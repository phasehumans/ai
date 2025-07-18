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


""" 
Inheritance:
- child class can have its parents attributes and can also creates its own attributes

Polymorphism (many forms):
- depend upon class, methods logic gets change


 """

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
    





















# Polymorphism
class Shape:
    def area(self):
        pass

class Circle(Shape):
    def _init_(self, radius):
        self.radius= radius
    
    def area(self):
        return 3.14 * self.radius * self.radius
    
class Rectangle(Shape):
    def _init_ (self, height, width):
        self.height= height
        self.width= width
    
    def area(self):
        return self.height * self.width