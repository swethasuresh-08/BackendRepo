//This is allow us to create a server dat a client can communicate to
//Response Header is controlled by developers
//Request Header is controlled by browser

const http=require('http')

const data={
    name:'Bruce 2'
}

const server=http.createServer((req,res)=>{
    console.log("Server is triggered")

    /* 
    Data sent from server -- String
    res.end("Test Results")
    Data sent from server -- HTML 
    res.end("<h1>Test Results</h1>")
    Data sent from server -- Object -- We have to parse and sent it
    res.end(JSON.stringify(data))
*/


res.setHeader('Content-Type','application/json')
res.end(JSON.stringify(data))
})

server.listen(8000)

//Server is running and listening for some request
