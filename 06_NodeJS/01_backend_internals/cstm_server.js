// creating server w/o express 

const http = require('http');

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

    case 'GET' : {
        if (req.url === '/' )
            return res.end('Homepage')

        if (req.url === '/contact-us' )
            return res.end('Contact Us Page')       // displayed on headers

        if (req.url === '/about' )
            // return console.log("about us page")
            return res.end('About Us')


    }
    break

    case 'POST' : {

    }
    break

   } 


    res.end("this is the response")
});

server.listen(8000, function(){
    console.log(`server started`)
})

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