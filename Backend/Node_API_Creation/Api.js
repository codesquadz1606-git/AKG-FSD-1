const http = require("http")

let users=[
    {
        id:1,
        name:"Alok"
    },
    {
        id:2,
        name:"Vishwas"
    },
    {
        id:3,
        name:"Ashish"
    }
]

const server=http.createServer((req,res)=>{
    // get /users
    if(req.url=="/users" && req.method=="GET"){
        res.writeHead(200,{
            "Content-Type":"application/json"
        })

        return res.end(JSON.stringify(users));
    }

    // post /users
    if(req.url=="/users" && req.method=="POST"){
        let body="";

        req.on("data",(chunk)=>{
            body+=chunk; // string
        });

        req.on("end",()=>{
            const user=JSON.parse(body); // JSON format

            users.push({
                id:user.id,
                name:user.name
            })
            
            res.writeHead(201,{
                "Content-Type":"application/json"
            });
            
            res.end(JSON.stringify({
                message:"Data Created",
                data:user
            }));
        });
    }
})

server.listen(3000,()=>{
    console.log("Listening at 3000")
})