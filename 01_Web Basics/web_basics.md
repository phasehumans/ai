When you visit a website and click "Buy," what you see on the screen is the **frontend**, and everything that happens behind the scenes—like processing your payment and updating stock—is the **backend**.

🔗 **HTTP** is the protocol that lets the frontend communicate with the backend.



# What is HTTP?

**HTTP** (HyperText Transfer Protocol) is a protocol used for transferring data over the internet.

- **Hypertext** → Text containing links to other resources.
- **Protocol** → A set of rules defining how data is transferred.

## Key Features of HTTP

### 1. HTTP Headers

HTTP headers act as **metadata** for transferred data, including:

- Client details
- Browser type
- Date & Time

### 2. Human-Readable

- HTTP requests and responses are **readable**.
- Open Developer Tools (F12) → Network tab to inspect HTTP traffic.
- You can also **Inspect Element** or view **Page Source**.

### 3. Stateless

HTTP **doesn’t remember** anything about previous requests. Every time you interact with a server, it's like starting fresh.

#### **How Do Websites Remember You?**

Websites use various techniques to maintain user sessions:

- **Cookies** → Store small data in the browser (e.g., login status, preferences).
- **Session Tokens** → Used in APIs for authentication (JWT).
- **Server-Side Sessions** → The server tracks user data using session IDs.

**Analogy:**

- **Calling a restaurant:** Each time you call, they don't remember past orders. You have to **repeat** your order every time.
- **Fix?** The restaurant takes notes.

### 4. Request-Response Model

HTTP works using a **Request-Response** model.

🟢 **Client sends request** → 🔄 **Server processes it** → 🔵 **Server responds**

“Just like a function call with arguments → It processes → Returns something.”



## HTTP Methods

HTTP methods define the type of action a client wants to perform.

| **Method** | **Description** |
| --- | --- |
| **GET** | Requests data from the server (like a webpage) |
| **POST** | Sends data to the server (submitting a form) |
| **PUT** | Updates existing data on the server |
| **DELETE** | Deletes data from the server |



## HTTP Status Codes

Status codes are like short messages that indicate the result of an HTTP request.

| **Status Code** | **Meaning** |
| --- | --- |
| ✅ **200 OK** | Everything is fine |
| 🚫 **403 Forbidden** | Unauthorized access |
| ❌ **404 Not Found** | Page not found |
| ⚠️ **500 Internal Server Error** | Server-side issue |



# HTTPS (HyperText Transfer Protocol Secure)

HTTPS is simply HTTP + Encryption (SSL/TLS).

- Encrypts data between client and server.
- Protects sensitive information like passwords, credit card details.

## **How HTTPS Works?**

1. **TLS/SSL Handshake** → Browser and server establish a secure connection.
2. **Encryption** → Data is encrypted before transmission.
3. **Authentication** → Server presents an SSL certificate to verify identity.
4. **Secure Communication** → Ensures data privacy and integrity.



# **Related Concepts**

## **User Agent**

- A software (browser) that interacts with HTTP.
- Each request includes a **User Agent** string containing details about the browser, OS, and version.

📝 **Example:**

`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36`

## **HTTP Headers**

- Key-value pairs sent in HTTP requests/responses.
- Carries metadata such as **content type, caching instructions, authentication tokens**.

📝 **Example:**

 `Content-Type: text/html` → Tells the server the data type being sent.

## **Cache**

- Stores frequently accessed data to improve loading times.
- Can be client-side (browser) or server-side.

## **IP (Internet Protocol)**

- Defines how devices are identified & located on a network.
- Each device has a unique IP address (e.g. `192.168.1.1`).

## **URL (Uniform Resource Locator)**

- Address of a resource on the web.

### **URL Breakdown:**

`https://courses.chaicode.com:8080/learn/batch/about?bundleId=214297#FAQs`

| **Part** | **Example** | **Meaning** |
| --- | --- | --- |
| **Protocol** | `https://` | Defines how data is transmitted |
| **Subdomain** | `courses.` | A prefix before the domain, used to categorize sections |
| **Domain Name** | `chaicode` | The main name of the website. |
| **TLD** | `.com` | The highest level of the domain hierarchy |
| **Port Number** | `:8080` | Specifies the communication endpoint. |
| **Route** | `/learn/batch/about` | Specifies the exact resource or page being requested. |
| **Query Parameters** | `?bundleId=214297` | Key-value pairs for dynamic content. |
| **Fragment** | `#FAQs` | Jumps to a specific section of the page. |


# **OSI Model**

- The Open Systems Interconnection (OSI) model is a conceptual model for network communication.
- Each layer has a specific job and communicates with layers above/below it.


# TCP (Transmission Control Protocol)

- Connection-oriented (Requires handshake)
- Reliable & ordered delivery
- Slower due to data integrity checks

## How TCP Detects Data Loss?

- Each TCP segment has a sequence number
- Receiver sends an **ACK** for each received packet
- If sender does not receive an ACK, it retransmits the lost packet
- Receiver sends **duplicate ACKs** if a gap in sequence numbers is detected

### Example:
1. Client sends **Packet #1 (Seq: 1001)** → Server ACKs **1002**
2. Client sends **Packet #2 (Seq: 1002)** → Lost in transit
3. Client sends **Packet #3 (Seq: 1003)** → Server detects Packet #2 is missing
4. Server sends **Duplicate ACK 1002**
5. Client retransmits **Packet #2**
6. Server receives it and ACKs **1004**

## Does Every TCP Data Packet Require an ACK?

- **Delayed ACKs** – Waits briefly (40-200ms) to acknowledge multiple packets together
- **Cumulative ACKs** – Acknowledges the highest continuous sequence received

## Why is a TCP Handshake Needed?

### 3-Way Handshake

1. **SYN (Client → Server)** - Client sends a **SYN** packet with an initial sequence number
2. **SYN-ACK (Server → Client)** - Server replies with a **SYN-ACK**, acknowledging the client’s ISN
3. **ACK (Client → Server)** - Client sends a final **ACK**, confirming the server's ISN

### Importance:
- Ensures both sides are ready before sending data
- Synchronizes sequence numbers
- Prevents replay attacks

### Replay Attack Example:
1. Attacker captures a **bank transaction packet** (transfer $100)
2. Attacker resends the packet later, causing an unintended duplicate transfer
3. Without a handshake, the server cannot distinguish between old and new requests

## When to Use TCP?
- Web Browsing
- File Transfers
- Emails
- Remote Access (SSH)


# UDP (User Datagram Protocol)

- Connectionless (No handshake)
- Faster but less reliable
- No guarantee of ordered delivery

## When to Use UDP?
- Online Gaming
- VoIP (Zoom, WhatsApp, Skype)
- DNS Resolution


# QUIC (Quick UDP Internet Connections)

- Developed by Google, used in HTTP/3
- Faster than TCP, removes handshake overhead
- No Head-of-Line Blocking
- TLS 1.3 built-in for secure connections
- Supports 0-RTT (instant data transfer if previously connected)


# DNS (Domain Name System)

DNS translates domain names into IP addresses.

## DNS Resolution Process:
1. You enter `www.example.com`
2. Browser checks cache, if not found, sends DNS query
3. Query goes to a **DNS Resolver** (usually ISP)
4. Resolver asks a **Root Nameserver**
5. Root server directs query to the **.com TLD Server**
6. TLD Server directs query to the **Authoritative Nameserver**
7. Authoritative server returns the actual IP address
8. Browser connects to the website using the retrieved IP

## Why Use DNS Caching?
- Reduces latency
- Minimizes DNS lookup times
- Improves browsing speed