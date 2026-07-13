const express=require("express");
const app=express();
const songRoutes=require("./router/songs.router")

app.use(express.json());
app.use("/",songRoutes);

module.exports=app;