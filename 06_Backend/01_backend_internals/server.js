const express = require('express');         

// err : requireStack express not install

// npm init
// npm intsall express ---> node modules folder created 


// creating server with express (wrapper):

// express creates handler fn and can add middleware

const http = require('http');

// const app= express()
const handleFunctionV2= express();
handleFunctionV2.get('/', (req, res) => res.end('Homepage'))
handleFunctionV2.get('/contact-us', (req, res) => res.end('Contact karo'))

// restart server, if done changes


// app.listen
handleFunctionV2.listen(8000, function(){       //listen on fn
    console.log(`server 2 started `)
})

// const server2 = http.createServer(handleFunctionV2)
// server2.listen(8000, function(){
//     console.log(`server 2 started `)
// })

const server = http.createServer(function(req, res){
    console.log('incoming request')
    console.log(req.method)
    console.log(req.url)

/* 
server started
incoming request
GET --> request type
/ --> url
*/

   switch(req.method){

    // not good for complex projects, thats why express comes in place


    // middleware
    case 'GET' : {
        if (req.url === '/' )
            return res.end('Homepage')

        if (req.url === '/contact-us' )
            return res.end('Contact Us Page')       // displayed on headers

        if (req.url === '/about' )
            return res.end('About Us')

    }
    break

    case 'POST' : {

    }
    break

   } 


    res.end("this is the response")
});

// server.listen(8000, function(){
//     console.log(`server started`)
// })



/*  this is the response :

StatusCode        : 200
StatusDescription : OK
Content           : {116, 104, 105, 115...}
RawContent        : HTTP/1.1 200 OK
                    Connection: keep-alive
                    Keep-Alive: timeout=5
                    Content-Length: 20
                    Date: Sun, 23 Mar 2025 10:34:35 GMT

                    this is the response
Headers           : {[Connection, keep-alive], [Keep-Alive,
                    timeout=5], [Content-Length, 20], [Date, Sun,    
                    23 Mar 2025 10:34:35 GMT]}
RawContentLength  : 20


*/