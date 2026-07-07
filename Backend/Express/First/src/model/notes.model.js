const mongoose=require("mongoose");

const notesSchema=new mongoose.Schema({
    noteId:{
        type:Number,
        unique:true
    },
    title:String
})

const notesModel=mongoose.model("notes",notesSchema);
module.exports=notesModel;