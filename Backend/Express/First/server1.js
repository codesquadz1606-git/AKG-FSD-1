// Note add, remove , edit

const express=require("express");
const app=express()
const noteRoutes=require("./src/routes/note.router")
const connectToDb=require("./src/db/db")

app.use(express.json())
app.use("/",noteRoutes)

connectToDb()

app.listen(3000,()=>{
    console.log("Listening at 3000")
})