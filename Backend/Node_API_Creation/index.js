const http=require("http");

const server=http.createServer((req,res)=>{
    res.end("This is my server\nThis is new line\nMy name is Ayush")
})

server.listen(3000,()=>{
    console.log("Listening to PORT 3000")
})

// nodemon