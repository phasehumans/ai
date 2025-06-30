/* 
--------------------    Execution context   ------------------

- global execution context- this 
- functional EC
- eval EC (mongo)

The Global Execution Context (GEC) is created first.
It includes:
Global object (like window in browser, global in Node.js)

A special value: this


Phase:
1. global execution --> this created {}
2. Memory phase
- var are created with undefined ; 
- fn definations
- var undefined

3. Execution phase
- var values are added
- new (FEC))ec + new env is created for fn
        - memory phase --> var created undefined (var inside of fn)
        - execution phase --> var values
        - deleted FCE after work

*/