const express = require("express");
const app=express() // server on kardiaa

app.use(express.json())

// req : req.body , req.params , req.query

app.get("/users",(req,res)=>{
    // res.send("GET API")

    
})

app.post("/users",(req,res)=>{
    // req.body
    const data =req.body;
    // console.log(data);
    res.json({
        data
    })
})

app.post("/users/:id",(req,res)=>{
    // req.params
    const data=req.params
    console.log(data)
    res.json({
        data
    })
})

app.post("/detail",(req,res)=>{
    const data=req.query;
    res.json({
        data
    })
})

app.put("/users",(req,res)=>{
    res.send("PUT API")
})

app.delete("/users",(req,res)=>{
    res.send("DELETE API")
})

app.listen(3000,()=>{
    console.log("Listening at 3000");
})