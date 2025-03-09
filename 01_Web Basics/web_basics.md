# Data Representation

## Bits and Bytes
- A **bit** (Binary Digit) is the smallest unit of data in a computer.
- A **byte** consists of 8 bits.
- Example:
  - **1 bit**: 0 or 1
  - **1 byte**: 10110011 (8 bits)

## Storing Text and Numbers
- **Text Storage**: Computers store text using encoding schemes like **ASCII** and **Unicode**.
  - Example: 'A' in ASCII is stored as **65 (01000001 in binary)**.
- **Number Storage**: Numbers are stored in **binary form**.
  - Example: **5 in decimal** is **101 in binary**.

## Binary Number System
- The binary system uses only **0 and 1**.
- Every number in decimal (0-9) can be converted to binary.
  - Example:
    - **Decimal 10** = **1010 in binary**
    - **Decimal 15** = **1111 in binary**

---

# Basics of Computer Networks

## IP Addresses
- Every device on the internet has a unique identifier called an **IP Address**.
- Two types of IP:
  - **IPv4** (e.g., 192.168.1.1)
  - **IPv6** (e.g., 2001:db8::ff00:42:8329)

## Internet Routing Protocol
- Data is sent over the internet in **packets**.
- Routers direct packets using protocols like **BGP (Border Gateway Protocol)**.
- Example: When you visit a website, packets travel through multiple routers to reach the server.

---

# UDP, TCP, HTTP, and The World Wide Web

## UDP (User Datagram Protocol)
- **Fast but unreliable**
- Used for **live streaming, gaming**
- Example: Watching a **live cricket match** online

## TCP (Transmission Control Protocol)
- **Slower but reliable**
- Ensures data reaches correctly
- Example: Sending an **email or downloading a file**

## HTTP (Hypertext Transfer Protocol)
- Used for accessing web pages
- **HTTPS** is the secure version
- Example: Visiting **https://google.com**

## The World Wide Web (WWW)
- A system of web pages connected through hyperlinks
- Uses **browsers (Chrome, Firefox)** to display content
- Example: Clicking a **link** to go from one website to another

---

# Programming Basics

## Variables
- Used to store values
- Example:
  ```python
  x = 10  # x is a variable storing the value 10
  name = "John"  # name is storing a string
  ```

## Strings and Numbers
- **String**: Text data (e.g., "Hello")
- **Number**: Integer (e.g., 10) or Float (e.g., 10.5)
- Example:
  ```python
  text = "Hello, World!"
  num = 25
  print(text, num)  # Output: Hello, World! 25
  ```

## If Condition
- Used to make decisions
- Example:
  ```python
  age = 18
  if age >= 18:
      print("You are an adult")
  else:
      print("You are a minor")
  ```

## Loops
- **For loop** (runs a fixed number of times)
  ```python
  for i in range(5):
      print(i)  # Output: 0 1 2 3 4
  ```
- **While loop** (runs until a condition is met)
  ```python
  x = 1
  while x <= 3:
      print(x)  # Output: 1 2 3
      x += 1
  ```

---

# Algorithm Basics
- A **step-by-step process** to solve a problem.
- Example: **Algorithm to find the sum of two numbers**
  1. Take two numbers as input
  2. Add them together
  3. Display the result
  
  **Python Example:**
  ```python
  def add_numbers(a, b):
      return a + b
  
  print(add_numbers(5, 3))  # Output: 8
  ```

