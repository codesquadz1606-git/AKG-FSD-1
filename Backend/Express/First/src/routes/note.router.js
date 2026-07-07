const express=require("express");
const notesModel = require("../model/notes.model");
const router=express.Router();

router.get("/notes",async (req,res)=>{
    let notes= await notesModel.find()
    res.json(notes);
})
router.post("/notes",async (req,res)=>{
    let {id,title}=req.body
    notesModel.create({
        noteId:id,
        title:title
    })
    res.json({
        message:"Note Created"
    });
})

module.exports=router;